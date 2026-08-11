import ArmorRequirements from "../ArmorRequirements/ArmorRequirements";
import MaterialTable from "../MaterialTable/MaterialTable";
import CraftingRequirements from "../CraftingRequirements/CraftingRequirements.jsx";
import ActualMaterialNeeds from "../ActualMaterialNeeds/ActualMaterialNeeds.jsx";

function ArmorDetails({
  armor,
  materials,
  materialStatus,
  isCheckingMaterials,
  inventory,
  onCheckMaterials,
  onInventoryChange,
  craftingRequirements,
  actualMaterialNeeds,
}) {
  return (
    <section>
      <h2>{armor.name}</h2>

      <div>
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

      <p>Location: {armor.location}</p>

      <ArmorRequirements
        armor={armor}
        materials={materials}
        onCheckMaterials={onCheckMaterials}
      />

      {isCheckingMaterials && (
        <>
          <MaterialTable
            materialStatus={materialStatus}
            materials={materials}
            inventory={inventory}
            onInventoryChange={onInventoryChange}
          />

          <CraftingRequirements
            craftingRequirements={craftingRequirements}
            materials={materials}
            materialStatus={materialStatus}
            inventory={inventory}
            onInventoryChange={onInventoryChange}
          />

          <ActualMaterialNeeds
            actualMaterialNeeds={actualMaterialNeeds}
            materials={materials}
          />
        </>
      )}
    </section>
  );
}

export default ArmorDetails;
