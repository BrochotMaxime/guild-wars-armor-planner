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

function App() {
  const [selectedProfession, setSelectedProfession] = useState(null);
  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const [selectedArmor, setSelectedArmor] = useState(null);
  const [inventory, setInventory] = useState({});
  const [isCheckingMaterials, setIsCheckingMaterials] = useState(false);

  function handleProfessionSelect(profession) {
    setSelectedProfession(profession);
    setSelectedCampaign(null);
    setSelectedArmor(null);
    setInventory({});
    setIsCheckingMaterials(false);
  }

  function handleCampaignSelect(campaign) {
    setSelectedCampaign(campaign);
    setSelectedArmor(null);
    setInventory({});
    setIsCheckingMaterials(false);
  }

  function handleArmorSelect(armor) {
    setSelectedArmor(armor);
    setInventory({});
    setIsCheckingMaterials(false);
  }

  function handleInventoryChange(materialId, value) {
    const quantity = value === "" ? 0 : Math.max(0, Math.floor(Number(value)));

    setInventory((currentInventory) => ({
      ...currentInventory,
      [materialId]: quantity,
    }));
  }

  function handleProfessionBreadcrumbClick() {
    setSelectedCampaign(null);
    setSelectedArmor(null);
    setInventory({});
    setIsCheckingMaterials(false);
  }

  function handleCampaignBreadcrumbClick() {
    setSelectedArmor(null);
    setInventory({});
    setIsCheckingMaterials(false);
  }

  const filteredArmors = armors.filter(
    (armor) =>
      armor.professionId === selectedProfession?.id &&
      armor.campaignId === selectedCampaign?.id,
  );

  const materialStatus = selectedArmor
    ? calculateMissingMaterials(selectedArmor.cost.materials, inventory)
    : [];

  const craftingRequirements = calculateCraftingRequirements(
    materialStatus,
    materials,
    craftingRecipes,
  );

  const actualMaterialNeeds = selectedArmor
    ? aggregateMaterials(
        materialStatus,
        craftingRequirements,
        inventory,
        materials,
      )
    : [];

  const missingRareMaterials = materialStatus.filter(
    ({ materialId, missing }) => {
      const material = materials.find(({ id }) => id === materialId);

      return material?.type === "rare" && missing > 0;
    },
  );

  const acquisitionNeeds = [
    ...actualMaterialNeeds.filter(({ missing }) => missing > 0),
    ...missingRareMaterials,
  ];

  return (
    <main>
      <h1>Guild Wars Armor Planner</h1>

      <Breadcrumb
        selectedProfession={selectedProfession}
        selectedCampaign={selectedCampaign}
        selectedArmor={selectedArmor}
        onProfessionClick={handleProfessionBreadcrumbClick}
        onCampaignClick={handleCampaignBreadcrumbClick}
      />

      <ProfessionSelector
        professions={professions}
        selectedProfession={selectedProfession}
        onSelectProfession={handleProfessionSelect}
      />

      {selectedProfession && (
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
          materials={materials}
          materialStatus={materialStatus}
          craftingRequirements={craftingRequirements}
          actualMaterialNeeds={actualMaterialNeeds}
          acquisitionNeeds={acquisitionNeeds}
          acquisitionMethods={acquisitionMethods}
          isCheckingMaterials={isCheckingMaterials}
          inventory={inventory}
          onCheckMaterials={() => setIsCheckingMaterials(true)}
          onInventoryChange={handleInventoryChange}
        />
      )}
    </main>
  );
}

export default App;
