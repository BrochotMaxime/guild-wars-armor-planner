function CraftingRequirements({
  craftingRequirements,
  materials,
  materialStatus,
  inventory,
  onInventoryChange,
}) {
  function getMaterialById(materialId) {
    return materials.find((material) => material.id === materialId);
  }

  function isArmorMaterial(materialId) {
    return materialStatus.some(
      (material) => material.materialId === materialId,
    );
  }

  if (craftingRequirements.length === 0) {
    return null;
  }

  return (
    <section>
      <h3>Crafting requirements</h3>

      {craftingRequirements.map((requirement) => {
        const material = getMaterialById(requirement.materialId);

        return (
          <div className="crafting-requirement" key={requirement.materialId}>
            <h4>
              {material.name}: {requirement.missing} missing
            </h4>

            <ul>
              {requirement.ingredients.map(({ materialId, quantity }) => {
                const ingredient = getMaterialById(materialId);
                const isAdditionalMaterial = !isArmorMaterial(materialId);

                return (
                  <li key={materialId}>
                    <span>
                      {ingredient.name}: {quantity}
                    </span>

                    {isAdditionalMaterial && (
                      <label>
                        Owned:
                        <input
                          type="number"
                          min="0"
                          step="1"
                          value={inventory[materialId] ?? ""}
                          onChange={(event) =>
                            onInventoryChange(materialId, event.target.value)
                          }
                        />
                      </label>
                    )}
                  </li>
                );
              })}
            </ul>

            <p>Additional crafting gold: {requirement.gold}</p>
          </div>
        );
      })}
    </section>
  );
}

export default CraftingRequirements;
