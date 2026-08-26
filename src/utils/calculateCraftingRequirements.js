function calculateCraftingRequirements(
  materialStatus,
  materials,
  craftingRecipes,
  craftingSelections,
  inventory,
) {
  const requiredTotals = new Map();
  const processedOperations = new Map();
  const craftingRequirements = new Map();
  const queue = [];

  materialStatus.forEach(({ materialId, required }) => {
    requiredTotals.set(materialId, required);
    queue.push(materialId);
  });

  while (queue.length > 0) {
    const materialId = queue.shift();

    if (!craftingSelections[materialId]) {
      continue;
    }

    const material = materials.find(({ id }) => id === materialId);

    if (material?.type !== "rare") {
      continue;
    }

    const recipe = craftingRecipes.find(
      ({ outputMaterialId }) => outputMaterialId === materialId,
    );

    if (!recipe) {
      continue;
    }

    const required = requiredTotals.get(materialId) ?? 0;
    const owned = inventory[materialId] ?? 0;
    const missing = Math.max(required - owned, 0);

    const craftingOperations = Math.ceil(missing / recipe.outputQuantity);

    const previousOperations = processedOperations.get(materialId) ?? 0;

    const additionalOperations = craftingOperations - previousOperations;

    if (additionalOperations <= 0) {
      continue;
    }

    processedOperations.set(materialId, craftingOperations);

    recipe.ingredients.forEach((ingredient) => {
      const additionalQuantity = ingredient.quantity * additionalOperations;

      const currentRequired = requiredTotals.get(ingredient.materialId) ?? 0;

      requiredTotals.set(
        ingredient.materialId,
        currentRequired + additionalQuantity,
      );

      if (craftingSelections[ingredient.materialId]) {
        queue.push(ingredient.materialId);
      }
    });

    craftingRequirements.set(materialId, {
      materialId,
      missing,
      craftingOperations,
      ingredients: recipe.ingredients.map((ingredient) => ({
        materialId: ingredient.materialId,
        quantity: ingredient.quantity * craftingOperations,
      })),
      gold: recipe.gold * craftingOperations,
    });
  }

  return Array.from(craftingRequirements.values());
}

export default calculateCraftingRequirements;
