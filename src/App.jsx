import { useState } from "react";

import AppHeader from "./components/layout/AppHeader";
import AppFooter from "./components/layout/AppFooter";
import Breadcrumb from "./components/layout/Breadcrumb";

import ArmorDetails from "./components/armor/ArmorDetails";
import ArmorList from "./components/armor/ArmorList";

import CampaignSelector from "./components/selectors/CampaignSelector";
import ProfessionSelector from "./components/selectors/ProfessionSelector";

import WorkflowPanel from "./components/workflow/WorkflowPanel";

import acquisitionMethods from "./data/acquisitionMethods";
import armors from "./data/armors/armors";
import campaigns from "./data/campaigns";
import craftingRecipes from "./data/craftingRecipes";
import materials from "./data/materials";
import professions from "./data/professions";

import useWorkflowNavigation from "./hooks/useWorkflowNavigation";

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
  const {
    activeStep,
    scrollToElement,
    scrollToWorkflowStep,
    toggleWorkflowStep,
    returnToWorkflowStart,
  } = useWorkflowNavigation(WORKFLOW_STEPS.profession);
  const [selectedProfession, setSelectedProfession] = useState(null);
  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const [selectedArmor, setSelectedArmor] = useState(null);
  const [selectedMaterial, setSelectedMaterial] = useState(null);
  const [craftingSelections, setCraftingSelections] = useState({});
  const [inventory, setInventory] = useState({});
  const [isCheckingMaterials, setIsCheckingMaterials] = useState(false);

  function resetPlannerState() {
    setSelectedMaterial(null);
    setCraftingSelections({});
    setInventory({});
    setIsCheckingMaterials(false);
  }

  function resetArmorState() {
    setSelectedArmor(null);
    resetPlannerState();
  }

  function resetCampaignState() {
    setSelectedCampaign(null);
    resetArmorState();
  }

  function handleProfessionSelect(profession) {
    const hasProfessionChanged = selectedProfession?.id !== profession.id;

    setSelectedProfession(profession);

    if (hasProfessionChanged) {
      resetCampaignState();
    }

    scrollToWorkflowStep(WORKFLOW_STEPS.campaign);
  }

  function handleCampaignSelect(campaign) {
    const hasCampaignChanged = selectedCampaign?.id !== campaign.id;

    setSelectedCampaign(campaign);

    if (hasCampaignChanged) {
      resetArmorState();
    }

    scrollToWorkflowStep(WORKFLOW_STEPS.armor);
  }

  function handleArmorSelect(armor) {
    const hasArmorChanged = selectedArmor?.id !== armor.id;

    setSelectedArmor(armor);

    if (hasArmorChanged) {
      resetPlannerState();
    }

    scrollToElement("armor-details", null);
  }

  function handlePlanArmor() {
    setIsCheckingMaterials(true);
    scrollToElement("armor-planner");
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

  function handleHomeBreadcrumbClick() {
    setSelectedProfession(null);
    resetCampaignState();
    returnToWorkflowStart();
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
            onToggle={() => toggleWorkflowStep(WORKFLOW_STEPS.profession)}
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
            onToggle={() => toggleWorkflowStep(WORKFLOW_STEPS.campaign)}
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
            onToggle={() => toggleWorkflowStep(WORKFLOW_STEPS.armor)}
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

      <AppFooter />
    </>
  );
}

export default App;
