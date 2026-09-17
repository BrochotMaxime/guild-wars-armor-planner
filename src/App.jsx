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

  function resetArmorState() {
    setSelectedArmor(null);
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
    setSelectedArmor(armor);
    scrollToElement("armor-details", null);
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
              key={selectedArmor.id}
              armor={selectedArmor}
              materials={allMaterials}
              craftingRecipes={craftingRecipes}
              acquisitionMethods={acquisitionMethods}
              onPlanArmor={() => scrollToElement("armor-planner")}
            />
          )}
        </div>
      </main>

      <AppFooter />
    </>
  );
}

export default App;
