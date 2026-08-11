function aggregateMaterials(
  materialStatus,
  craftingRequirements,
  inventory,
  materials,
) {
  const totals = {};

  materialStatus
    .filter(({ materialId }) => {
      const material = materials.find(({ id }) => id === materialId);

      return material?.type === "common";
    })
    .forEach(({ materialId, required }) => {
      totals[materialId] = (totals[materialId] ?? 0) + required;
    });

  craftingRequirements.forEach(({ ingredients }) => {
    ingredients.forEach(({ materialId, quantity }) => {
      totals[materialId] = (totals[materialId] ?? 0) + quantity;
    });
  });

  return Object.entries(totals).map(([materialId, required]) => {
    const owned = inventory[materialId] ?? 0;
    const missing = Math.max(required - owned, 0);

    return {
      materialId,
      required,
      owned,
      missing,
    };
  });
}

export default aggregateMaterials;
