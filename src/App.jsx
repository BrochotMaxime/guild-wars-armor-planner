import { useState } from "react";

import ArmorDetails from "./components/ArmorDetails/ArmorDetails";
import ArmorList from "./components/ArmorList/ArmorList";
import Breadcrumb from "./components/Breadcrumb/Breadcrumb";
import CampaignSelector from "./components/CampaignSelector/CampaignSelector";
import ProfessionSelector from "./components/ProfessionSelector/ProfessionSelector";

import acquisitionMethods from "./data/acquisitionMethods";
import armors from "./data/armors";
import campaigns from "./data/campaigns";
import craftingRecipes from "./data/craftingRecipes";
import materials from "./data/materials";
import professions from "./data/professions";

import aggregateMaterials from "./utils/aggregateMaterials";
import calculateCraftingRequirements from "./utils/calculateCraftingRequirements";
import calculateMissingMaterials from "./utils/calculateMissingMaterials";

const allArmors = Object.values(armors).flat();
const allMaterials = Object.values(materials).flat();

function App() {
  const [selectedProfession, setSelectedProfession] = useState(null);
  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const [selectedArmor, setSelectedArmor] = useState(null);
  const [selectedMaterial, setSelectedMaterial] = useState(null);
  const [craftingSelections, setCraftingSelections] = useState({});
  const [inventory, setInventory] = useState({});
  const [isCheckingMaterials, setIsCheckingMaterials] = useState(false);

  function handleProfessionSelect(profession) {
    setSelectedProfession(profession);
    setSelectedCampaign(null);
    setSelectedArmor(null);
    setSelectedMaterial(null);
    setCraftingSelections({});
    setInventory({});
    setIsCheckingMaterials(false);
  }

  function handleCampaignSelect(campaign) {
    setSelectedCampaign(campaign);
    setSelectedArmor(null);
    setSelectedMaterial(null);
    setCraftingSelections({});
    setInventory({});
    setIsCheckingMaterials(false);
  }

  function handleArmorSelect(armor) {
    setSelectedArmor(armor);
    setSelectedMaterial(null);
    setCraftingSelections({});
    setInventory({});
    setIsCheckingMaterials(false);
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
    setSelectedCampaign(null);
    setSelectedArmor(null);
    setSelectedMaterial(null);
    setCraftingSelections({});
    setInventory({});
    setIsCheckingMaterials(false);
  }

  function handleProfessionBreadcrumbClick() {
    setSelectedCampaign(null);
    setSelectedArmor(null);
    setSelectedMaterial(null);
    setCraftingSelections({});
    setInventory({});
    setIsCheckingMaterials(false);
  }

  function handleCampaignBreadcrumbClick() {
    setSelectedArmor(null);
    setSelectedMaterial(null);
    setCraftingSelections({});
    setInventory({});
    setIsCheckingMaterials(false);
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
    <main>
      <h1>Guild Wars Armor Planner</h1>

      <Breadcrumb
        selectedProfession={selectedProfession}
        selectedCampaign={selectedCampaign}
        selectedArmor={selectedArmor}
        onHomeClick={handleHomeBreadcrumbClick}
        onProfessionClick={handleProfessionBreadcrumbClick}
        onCampaignClick={handleCampaignBreadcrumbClick}
      />

      {!selectedProfession && (
        <ProfessionSelector
          professions={professions}
          selectedProfession={selectedProfession}
          onSelectProfession={handleProfessionSelect}
        />
      )}

      {selectedProfession && !selectedCampaign && (
        <CampaignSelector
          campaigns={campaigns}
          selectedCampaign={selectedCampaign}
          onSelectCampaign={handleCampaignSelect}
        />
      )}

      {selectedCampaign && !selectedArmor && (
        <ArmorList armors={filteredArmors} onSelectArmor={handleArmorSelect} />
      )}

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
          onPlanArmor={() => setIsCheckingMaterials(true)}
          onCraftingToggle={handleCraftingToggle}
          onInventoryChange={handleInventoryChange}
        />
      )}
    </main>
  );
}

export default App;
