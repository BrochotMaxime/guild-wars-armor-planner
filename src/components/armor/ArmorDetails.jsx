import { useState } from "react";

import useArmorPlanning from "../../hooks/useArmorPlanning";

import MaterialDetails from "../materials/MaterialDetails";
import ArmorPlanner from "./ArmorPlanner";
import ArmorPreviewGallery from "./ArmorPreviewGallery";
import ArmorRequirements from "./ArmorRequirements";

function ArmorDetails({
  armor,
  materials,
  craftingRecipes,
  acquisitionMethods,
  onPlanArmor,
}) {
  const [selectedMaterial, setSelectedMaterial] = useState(null);

  const {
    materialStatus,
    actualMaterialNeeds,
    craftingRequirements,
    craftingSelections,
    inventory,
    isCheckingMaterials,
    startPlanning,
    toggleCrafting,
    updateInventory,
  } = useArmorPlanning(armor, materials, craftingRecipes);

  function handlePlanArmor() {
    startPlanning();
    onPlanArmor();
  }

  const craftingLocationNames = armor.craftingLocations
    .map((location) => location.name)
    .join(" • ");

  return (
    <section id="armor-details" className="armor-details">
      <header className="armor-details__header">
        <div>
          <h2>{armor.name}</h2>

          {armor.prestige && (
            <span className="armor-details__prestige">Prestige</span>
          )}
        </div>

        <p className="armor-details__location">
          <span>Location</span>

          <strong>{craftingLocationNames || "Unknown location"}</strong>
        </p>
      </header>

      <div className="armor-details__overview">
        <ArmorPreviewGallery armor={armor} />

        <ArmorRequirements
          armor={armor}
          materials={materials}
          onMaterialClick={setSelectedMaterial}
          onPlanArmor={handlePlanArmor}
        />
      </div>

      {selectedMaterial && (
        <MaterialDetails
          material={selectedMaterial}
          materials={materials}
          acquisitionMethods={acquisitionMethods}
          craftingRecipes={craftingRecipes}
          onClose={() => setSelectedMaterial(null)}
        />
      )}

      {isCheckingMaterials && (
        <ArmorPlanner
          materialStatus={materialStatus}
          actualMaterialNeeds={actualMaterialNeeds}
          materials={materials}
          craftingRecipes={craftingRecipes}
          craftingSelections={craftingSelections}
          craftingRequirements={craftingRequirements}
          inventory={inventory}
          onInventoryChange={updateInventory}
          onCraftingToggle={toggleCrafting}
        />
      )}
    </section>
  );
}

export default ArmorDetails;
