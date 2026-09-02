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
    <section>
      <h2>{armor.name}</h2>

      <div className="armor-previews">
        <div>
          <h3>Male</h3>
          {armor.images.male ? (
            <img src={armor.images.male} alt={`${armor.name} male armor`} />
          ) : (
            <p>Image not available yet.</p>
          )}
        </div>

        <div>
          <h3>Female</h3>
          {armor.images.female ? (
            <img src={armor.images.female} alt={`${armor.name} female armor`} />
          ) : (
            <p>Image not available yet.</p>
          )}
        </div>
      </div>

      <p>
        Location: {armor.craftingLocation.name}
        {armor.craftingLocation.campaignId !== armor.campaignId &&
          ` (${armor.craftingLocation.campaignId})`}
      </p>

      <ArmorRequirements
        armor={armor}
        materials={materials}
        onMaterialClick={onMaterialClick}
        onPlanArmor={onPlanArmor}
      />

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
