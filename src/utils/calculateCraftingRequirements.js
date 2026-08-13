function calculateCraftingRequirements(
  materialStatus,
  materials,
  craftingRecipes,
  craftingSelections,
) {
  return materialStatus
    .filter(({ materialId, missing }) => {
      const material = materials.find(({ id }) => id === materialId);

      return (
        material?.type === "rare" &&
        missing > 0 &&
        craftingSelections[materialId]
      );
    })
    .map(({ materialId, missing }) => {
      const recipe = craftingRecipes.find(
        ({ outputMaterialId }) => outputMaterialId === materialId,
      );

      if (!recipe) {
        return null;
      }

      const craftingOperations = Math.ceil(missing / recipe.outputQuantity);

      return {
        materialId,
        missing,
        craftingOperations,
        ingredients: recipe.ingredients.map((ingredient) => ({
          materialId: ingredient.materialId,
          quantity: ingredient.quantity * craftingOperations,
        })),
        gold: recipe.gold * craftingOperations,
      };
    })
    .filter(Boolean);
}

export default calculateCraftingRequirements;
