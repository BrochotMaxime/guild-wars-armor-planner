function calculateMissingMaterials(requirements, inventory) {
  return requirements.map(({ materialId, quantity }) => {
    const owned = inventory[materialId] ?? 0;
    const missing = Math.max(quantity - owned, 0);

    return {
      materialId,
      required: quantity,
      owned,
      missing,
    };
  });
}

export default calculateMissingMaterials;
