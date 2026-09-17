import ArmorPlannerRow from "./ArmorPlannerRow";
import CurrencyAmount from "../ui/CurrencyAmount";
import prepareArmorPlannerMaterials from "../../utils/prepareArmorPlannerMaterials";

function ArmorPlanner({
  materialStatus,
  actualMaterialNeeds,
  materials,
  craftingRecipes,
  craftingSelections,
  craftingRequirements,
  inventory,
  onInventoryChange,
  onCraftingToggle,
}) {
  function getMaterialById(materialId) {
    return materials.find((material) => material.id === materialId);
  }

  function hasCraftingRecipe(materialId) {
    return craftingRecipes.some(
      (recipe) => recipe.outputMaterialId === materialId,
    );
  }

  function getArmorQuantity(materialId) {
    const armorRequirement = materialStatus.find(
      (item) => item.materialId === materialId,
    );

    return armorRequirement?.required ?? 0;
  }

  function getCraftQuantity(materialId) {
    return craftingRequirements.reduce((total, requirement) => {
      const ingredient = requirement.ingredients.find(
        (item) => item.materialId === materialId,
      );

      return total + (ingredient?.quantity ?? 0);
    }, 0);
  }

  const {
    commonPlannerMaterials,
    orderedRareMaterials,
    additionalCraftingGold,
  } = prepareArmorPlannerMaterials({
    materialStatus,
    actualMaterialNeeds,
    materials,
    craftingRequirements,
  });

  function renderMaterialRow({ materialId, required, missing, depth = 0 }) {
    const material = getMaterialById(materialId);

    if (!material) {
      return null;
    }

    const row = {
      material,
      required,
      missing,
      depth,
      armorQuantity: getArmorQuantity(materialId),
      craftQuantity: getCraftQuantity(materialId),
      canCraft: material.type === "rare" && hasCraftingRecipe(materialId),
      isCrafting: Boolean(craftingSelections[materialId]),
      inventoryValue: inventory[materialId] ?? "",
    };

    return (
      <ArmorPlannerRow
        key={materialId}
        row={row}
        onInventoryChange={onInventoryChange}
        onCraftingToggle={onCraftingToggle}
      />
    );
  }

  return (
    <section id="armor-planner" className="armor-planner">
      <h3>Armor planner</h3>

      <div className="armor-planner__table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Material</th>
              <th>Need</th>
              <th>Owned</th>
              <th>Missing</th>
            </tr>
          </thead>

          {commonPlannerMaterials.length > 0 && (
            <tbody className="armor-planner__group">
              <tr className="armor-planner__group-title">
                <th colSpan="4">Common materials</th>
              </tr>

              {commonPlannerMaterials.map((material) =>
                renderMaterialRow(material),
              )}
            </tbody>
          )}

          {orderedRareMaterials.length > 0 && (
            <tbody className="armor-planner__group">
              <tr className="armor-planner__group-title">
                <th colSpan="4">Rare materials</th>
              </tr>

              {orderedRareMaterials.map((material) =>
                renderMaterialRow(material),
              )}
            </tbody>
          )}
        </table>
      </div>

      {additionalCraftingGold > 0 && (
        <p className="armor-planner__crafting-cost">
          Additional crafting cost:{" "}
          <strong>
            <CurrencyAmount goldAmount={additionalCraftingGold} />
          </strong>
        </p>
      )}
    </section>
  );
}

export default ArmorPlanner;
