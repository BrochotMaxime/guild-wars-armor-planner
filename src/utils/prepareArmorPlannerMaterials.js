function prepareArmorPlannerMaterials({
  materialStatus,
  actualMaterialNeeds,
  materials,
  craftingRequirements,
}) {
  function getMaterialById(materialId) {
    return materials.find((material) => material.id === materialId);
  }

  const allPlannerMaterials = [
    ...actualMaterialNeeds,
    ...materialStatus.filter(
      ({ materialId }) =>
        !actualMaterialNeeds.some(
          (material) => material.materialId === materialId,
        ),
    ),
  ];

  const commonPlannerMaterials = allPlannerMaterials.filter(
    ({ materialId }) => getMaterialById(materialId)?.type === "common",
  );

  const rarePlannerMaterials = allPlannerMaterials.filter(
    ({ materialId }) => getMaterialById(materialId)?.type === "rare",
  );

  const directRareMaterialIds = new Set(
    materialStatus
      .filter(({ materialId }) => getMaterialById(materialId)?.type === "rare")
      .map(({ materialId }) => materialId),
  );

  function getRareParentId(materialId) {
    const parentRequirement = craftingRequirements.find((requirement) =>
      requirement.ingredients.some(
        (ingredient) => ingredient.materialId === materialId,
      ),
    );

    return parentRequirement?.materialId ?? null;
  }

  function buildRareMaterialOrder() {
    const orderedMaterials = [];
    const visited = new Set();

    function addMaterial(materialId, depth = 0) {
      if (visited.has(materialId)) {
        return;
      }

      const plannerMaterial = rarePlannerMaterials.find(
        (material) => material.materialId === materialId,
      );

      if (!plannerMaterial) {
        return;
      }

      visited.add(materialId);

      orderedMaterials.push({
        ...plannerMaterial,
        depth,
      });

      rarePlannerMaterials
        .filter(
          ({ materialId: childMaterialId }) =>
            getRareParentId(childMaterialId) === materialId,
        )
        .forEach(({ materialId: childMaterialId }) => {
          addMaterial(childMaterialId, depth + 1);
        });
    }

    directRareMaterialIds.forEach((materialId) => {
      addMaterial(materialId);
    });

    rarePlannerMaterials.forEach(({ materialId }) => {
      addMaterial(materialId);
    });

    return orderedMaterials;
  }

  const additionalCraftingGold = craftingRequirements.reduce(
    (total, requirement) => total + requirement.gold,
    0,
  );

  return {
    commonPlannerMaterials,
    orderedRareMaterials: buildRareMaterialOrder(),
    additionalCraftingGold,
  };
}

export default prepareArmorPlannerMaterials;
