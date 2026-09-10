import { useState } from "react";

import AppHeader from "./components/AppHeader/AppHeader";
import ArmorDetails from "./components/ArmorDetails/ArmorDetails";
import ArmorList from "./components/ArmorList/ArmorList";
import Breadcrumb from "./components/Breadcrumb/Breadcrumb";
import CampaignSelector from "./components/CampaignSelector/CampaignSelector";
import ProfessionSelector from "./components/ProfessionSelector/ProfessionSelector";
import WorkflowPanel from "./components/WorkflowPanel/WorkflowPanel";

import acquisitionMethods from "./data/acquisitionMethods";
import armors from "./data/armors/armors";
import campaigns from "./data/campaigns";
import craftingRecipes from "./data/craftingRecipes";
import materials from "./data/materials";
import professions from "./data/professions";

import aggregateMaterials from "./utils/aggregateMaterials";
import calculateCraftingRequirements from "./utils/calculateCraftingRequirements";
import calculateMissingMaterials from "./utils/calculateMissingMaterials";

const allArmors = Object.values(armors).flat();
const allMaterials = Object.values(materials).flat();

const WORKFLOW_STEPS = {
  profession: "profession",
  campaign: "campaign",
  armor: "armor",
};

function App() {
  const [activeStep, setActiveStep] = useState(WORKFLOW_STEPS.profession);
  const [selectedProfession, setSelectedProfession] = useState(null);
  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const [selectedArmor, setSelectedArmor] = useState(null);
  const [selectedMaterial, setSelectedMaterial] = useState(null);
  const [craftingSelections, setCraftingSelections] = useState({});
  const [inventory, setInventory] = useState({});
  const [isCheckingMaterials, setIsCheckingMaterials] = useState(false);

  function handleProfessionSelect(profession) {
    const hasProfessionChanged = selectedProfession?.id !== profession.id;

    setSelectedProfession(profession);

    if (hasProfessionChanged) {
      setSelectedCampaign(null);
      setSelectedArmor(null);
      setSelectedMaterial(null);
      setCraftingSelections({});
      setInventory({});
      setIsCheckingMaterials(false);
    }

    scrollToWorkflowStep(WORKFLOW_STEPS.campaign);
  }

  function handleCampaignSelect(campaign) {
    const hasCampaignChanged = selectedCampaign?.id !== campaign.id;

    setSelectedCampaign(campaign);

    if (hasCampaignChanged) {
      setSelectedArmor(null);
      setSelectedMaterial(null);
      setCraftingSelections({});
      setInventory({});
      setIsCheckingMaterials(false);
    }

    scrollToWorkflowStep(WORKFLOW_STEPS.armor);
  }

  function handleArmorSelect(armor) {
    const hasArmorChanged = selectedArmor?.id !== armor.id;

    setSelectedArmor(armor);

    if (hasArmorChanged) {
      setSelectedMaterial(null);
      setCraftingSelections({});
      setInventory({});
      setIsCheckingMaterials(false);
    }

    scrollToElement("armor-details", null);
  }

  function handlePlanArmor() {
    setIsCheckingMaterials(true);
    scrollToElement("armor-planner");
  }

  function handleStepToggle(step) {
    const nextActiveStep = activeStep === step ? null : step;

    scrollToWorkflowStep(step, nextActiveStep);
  }

  function handleCraftingToggle(materialId) {
    setCraftingSelections((currentSelections) => ({
      ...currentSelections,
      [materialId]: !currentSelections[materialId],
    }));
  }

  function handleInventoryChange(materialId, value) {
    const quantity = value === "" ? 0 : Math.max(0, Math.floor(Number(value)));

    setInventory((currentInventory) => ({
      ...currentInventory,
      [materialId]: quantity,
    }));
  }

  function scrollToElement(targetId, nextActiveStep = activeStep) {
    const shouldWaitForTransition = activeStep !== nextActiveStep;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    setActiveStep(nextActiveStep);

    window.requestAnimationFrame(() => {
      const target = document.getElementById(targetId);

      if (!target) {
        return;
      }

      function scrollToTarget() {
        const breadcrumb = document.querySelector(".breadcrumb");
        const breadcrumbHeight = breadcrumb?.offsetHeight ?? 0;
        const spacingBelowBreadcrumb = 16;

        const targetPosition =
          target.getBoundingClientRect().top +
          window.scrollY -
          breadcrumbHeight -
          spacingBelowBreadcrumb;

        window.scrollTo({
          top: targetPosition,
          behavior: prefersReducedMotion ? "auto" : "smooth",
        });
      }

      if (!shouldWaitForTransition || prefersReducedMotion) {
        scrollToTarget();
        return;
      }

      const workflow = target.closest(".workflow");

      if (!workflow) {
        scrollToTarget();
        return;
      }

      let fallbackTimeout;

      function handleTransitionEnd(event) {
        if (event.propertyName !== "grid-template-rows") {
          return;
        }

        workflow.removeEventListener("transitionend", handleTransitionEnd);
        window.clearTimeout(fallbackTimeout);

        window.requestAnimationFrame(scrollToTarget);
      }

      workflow.addEventListener("transitionend", handleTransitionEnd);

      fallbackTimeout = window.setTimeout(() => {
        workflow.removeEventListener("transitionend", handleTransitionEnd);
        scrollToTarget();
      }, 400);
    });
  }

  function scrollToWorkflowStep(step, nextActiveStep = step) {
    scrollToElement(`${step}-step`, nextActiveStep);
  }

  function handleHomeBreadcrumbClick() {
    setSelectedProfession(null);
    setSelectedCampaign(null);
    setSelectedArmor(null);
    setSelectedMaterial(null);
    setCraftingSelections({});
    setInventory({});
    setIsCheckingMaterials(false);
    setActiveStep(WORKFLOW_STEPS.profession);

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  }

  function handleProfessionBreadcrumbClick() {
    scrollToWorkflowStep(WORKFLOW_STEPS.profession);
  }

  function handleCampaignBreadcrumbClick() {
    scrollToWorkflowStep(WORKFLOW_STEPS.campaign);
  }

  function handleArmorBreadcrumbClick() {
    scrollToWorkflowStep(WORKFLOW_STEPS.armor);
  }

  const filteredArmors = allArmors.filter(
    (armor) =>
      armor.professionId === selectedProfession?.id &&
      armor.campaignId === selectedCampaign?.id,
  );

  const materialStatus = selectedArmor
    ? calculateMissingMaterials(selectedArmor.cost.materials, inventory)
    : [];

  const craftingRequirements = calculateCraftingRequirements(
    materialStatus,
    allMaterials,
    craftingRecipes,
    craftingSelections,
    inventory,
  );

  const actualMaterialNeeds = selectedArmor
    ? aggregateMaterials(
        materialStatus,
        craftingRequirements,
        inventory,
        allMaterials,
      )
    : [];

  return (
    <>
      <Breadcrumb
        selectedProfession={selectedProfession}
        selectedCampaign={selectedCampaign}
        selectedArmor={selectedArmor}
        onHomeClick={handleHomeBreadcrumbClick}
        onProfessionClick={handleProfessionBreadcrumbClick}
        onCampaignClick={handleCampaignBreadcrumbClick}
        onArmorClick={handleArmorBreadcrumbClick}
      />
      <AppHeader />

      <main>
        <div className="workflow">
          <WorkflowPanel
            id="profession-step"
            title="Profession"
            summary={selectedProfession?.name}
            isExpanded={activeStep === WORKFLOW_STEPS.profession}
            onToggle={() => handleStepToggle(WORKFLOW_STEPS.profession)}
          >
            <ProfessionSelector
              professions={professions}
              selectedProfession={selectedProfession}
              onSelectProfession={handleProfessionSelect}
            />
          </WorkflowPanel>

          <WorkflowPanel
            id="campaign-step"
            title="Campaign"
            summary={selectedCampaign?.name}
            isExpanded={activeStep === WORKFLOW_STEPS.campaign}
            isAvailable={Boolean(selectedProfession)}
            onToggle={() => handleStepToggle(WORKFLOW_STEPS.campaign)}
          >
            <CampaignSelector
              campaigns={campaigns}
              selectedCampaign={selectedCampaign}
              onSelectCampaign={handleCampaignSelect}
            />
          </WorkflowPanel>

          <WorkflowPanel
            id="armor-step"
            title="Armor"
            summary={selectedArmor?.name}
            isExpanded={activeStep === WORKFLOW_STEPS.armor}
            isAvailable={Boolean(selectedCampaign)}
            onToggle={() => handleStepToggle(WORKFLOW_STEPS.armor)}
          >
            <ArmorList
              armors={filteredArmors}
              selectedArmor={selectedArmor}
              onSelectArmor={handleArmorSelect}
            />
          </WorkflowPanel>

          {selectedArmor && (
            <ArmorDetails
              armor={selectedArmor}
              materials={allMaterials}
              materialStatus={materialStatus}
              selectedMaterial={selectedMaterial}
              onMaterialClick={setSelectedMaterial}
              craftingRequirements={craftingRequirements}
              craftingRecipes={craftingRecipes}
              craftingSelections={craftingSelections}
              actualMaterialNeeds={actualMaterialNeeds}
              acquisitionMethods={acquisitionMethods}
              isCheckingMaterials={isCheckingMaterials}
              inventory={inventory}
              onPlanArmor={handlePlanArmor}
              onCraftingToggle={handleCraftingToggle}
              onInventoryChange={handleInventoryChange}
            />
          )}
        </div>
      </main>
    </>
  );
}

export default App;
