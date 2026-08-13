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

  const rareMaterials = materialStatus.filter(({ materialId }) => {
    const material = getMaterialById(materialId);

    return material?.type === "rare";
  });

  const additionalCraftingGold = craftingRequirements.reduce(
    (total, requirement) => total + requirement.gold,
    0,
  );

  return (
    <section className="armor-planner">
      <h3>Armor planner</h3>

      <div className="armor-planner__table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Material</th>
              <th>Required</th>
              <th>Owned</th>
              <th>Missing</th>
              <th>Craft</th>
            </tr>
          </thead>

          <tbody>
            {actualMaterialNeeds.map(({ materialId, required, missing }) => {
              const material = getMaterialById(materialId);

              return (
                <tr key={materialId}>
                  <td>{material.name}</td>
                  <td>{required}</td>
                  <td>
                    <input
                      type="number"
                      min="0"
                      step="1"
                      value={inventory[materialId] ?? ""}
                      onChange={(event) =>
                        onInventoryChange(materialId, event.target.value)
                      }
                    />
                  </td>
                  <td>{missing}</td>
                  <td>—</td>
                </tr>
              );
            })}

            {rareMaterials.map(({ materialId, required, missing }) => {
              const material = getMaterialById(materialId);
              const canCraft = hasCraftingRecipe(materialId);

              return (
                <tr key={materialId}>
                  <td>{material.name}</td>
                  <td>{required}</td>
                  <td>
                    <input
                      type="number"
                      min="0"
                      step="1"
                      value={inventory[materialId] ?? ""}
                      onChange={(event) =>
                        onInventoryChange(materialId, event.target.value)
                      }
                    />
                  </td>
                  <td>{missing}</td>
                  <td>
                    {canCraft ? (
                      <label>
                        <input
                          type="checkbox"
                          checked={Boolean(craftingSelections[materialId])}
                          onChange={() => onCraftingToggle(materialId)}
                        />
                        Craft missing
                      </label>
                    ) : (
                      "—"
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {additionalCraftingGold > 0 && (
        <p>
          Additional crafting cost:{" "}
          <strong>{additionalCraftingGold} Gold</strong>
        </p>
      )}
    </section>
  );
}

export default ArmorPlanner;
