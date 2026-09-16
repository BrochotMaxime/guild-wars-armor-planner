import ArmorPreviewGallery from "./ArmorPreviewGallery";
import ArmorRequirements from "./ArmorRequirements";
import MaterialDetails from "../materials/MaterialDetails";
import ArmorPlanner from "./ArmorPlanner";

function ArmorDetails({
  armor,
  materials,
  materialStatus,
  selectedMaterial,
  craftingRequirements,
  craftingRecipes,
  craftingSelections,
  actualMaterialNeeds,
  acquisitionMethods,
  isCheckingMaterials,
  inventory,
  onMaterialClick,
  onPlanArmor,
  onCraftingToggle,
  onInventoryChange,
}) {
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

          <strong>
            {armor.craftingLocations.length > 0
              ? armor.craftingLocations
                  .map((location) => location.name)
                  .join(" • ")
              : "Unknown location"}
          </strong>
        </p>
      </header>

      <div className="armor-details__overview">
        <ArmorPreviewGallery armor={armor} />

        <ArmorRequirements
          armor={armor}
          materials={materials}
          onMaterialClick={onMaterialClick}
          onPlanArmor={onPlanArmor}
        />
      </div>

      {selectedMaterial && (
        <MaterialDetails
          material={selectedMaterial}
          materials={materials}
          acquisitionMethods={acquisitionMethods}
          craftingRecipes={craftingRecipes}
          onClose={() => onMaterialClick(null)}
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
          onInventoryChange={onInventoryChange}
          onCraftingToggle={onCraftingToggle}
        />
      )}
    </section>
  );
}

export default ArmorDetails;
