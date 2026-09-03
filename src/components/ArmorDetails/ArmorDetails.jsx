import ArmorRequirements from "../ArmorRequirements/ArmorRequirements";
import MaterialDetails from "../MaterialDetails/MaterialDetails";
import ArmorPlanner from "../ArmorPlanner/ArmorPlanner";

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
    <section className="armor-details">
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
        <div className="armor-previews">
          <figure className="armor-preview">
            <div className="armor-preview__image">
              {armor.images.male ? (
                <img src={armor.images.male} alt={`${armor.name} male armor`} />
              ) : (
                <p>Image not available yet.</p>
              )}
            </div>

            <figcaption>Male</figcaption>
          </figure>

          <figure className="armor-preview">
            <div className="armor-preview__image">
              {armor.images.female ? (
                <img
                  src={armor.images.female}
                  alt={`${armor.name} female armor`}
                />
              ) : (
                <p>Image not available yet.</p>
              )}
            </div>

            <figcaption>Female</figcaption>
          </figure>
        </div>

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
          acquisitionMethods={acquisitionMethods}
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
