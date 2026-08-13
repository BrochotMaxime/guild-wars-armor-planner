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

  function formatNeed(materialId, totalRequired) {
    const armorQuantity = getArmorQuantity(materialId);
    const craftQuantity = getCraftQuantity(materialId);

    if (armorQuantity > 0 && craftQuantity > 0) {
      return `${armorQuantity} + ${craftQuantity} = ${totalRequired}`;
    }

    if (craftQuantity > 0) {
      return `+${craftQuantity}`;
    }

    return armorQuantity;
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

      <div className="armor-planner__desktop-table">
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

            <tbody>
              {actualMaterialNeeds.map(({ materialId, required, missing }) => {
                const material = getMaterialById(materialId);

                return (
                  <tr key={materialId}>
                    <td>{material.name}</td>

                    <td>{formatNeed(materialId, required)}</td>

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

                    <td>
                      {craftingSelections[materialId] ? (
                        <span className="armor-planner__crafted-status">
                          Via craft
                        </span>
                      ) : (
                        missing
                      )}
                    </td>
                  </tr>
                );
              })}

              {rareMaterials.map(({ materialId, required, missing }) => {
                const material = getMaterialById(materialId);
                const canCraft = hasCraftingRecipe(materialId);

                return (
                  <tr key={materialId}>
                    <td>
                      <div className="armor-planner__material">
                        <span>{material.name}</span>

                        {canCraft && (
                          <label className="armor-planner__craft-option">
                            <input
                              type="checkbox"
                              checked={Boolean(craftingSelections[materialId])}
                              onChange={() => onCraftingToggle(materialId)}
                            />
                            Craft missing
                          </label>
                        )}
                      </div>
                    </td>

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
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <div className="armor-planner__mobile-list">
        {actualMaterialNeeds.map(({ materialId, required, missing }) => {
          const material = getMaterialById(materialId);

          return (
            <article className="armor-planner__mobile-item" key={materialId}>
              <div>
                <strong>{material.name}</strong>
                <span>{formatNeed(materialId, required)}</span>
              </div>

              <label>
                Owned
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

              <div className="armor-planner__mobile-result">
                <span>→ Missing</span>
                <strong>{missing}</strong>
              </div>
            </article>
          );
        })}

        {rareMaterials.map(({ materialId, required, missing }) => {
          const material = getMaterialById(materialId);
          const canCraft = hasCraftingRecipe(materialId);
          const isCrafting = Boolean(craftingSelections[materialId]);

          return (
            <article className="armor-planner__mobile-item" key={materialId}>
              <div>
                <strong>{material.name}</strong>
                <span>{required}</span>
              </div>

              <label>
                Owned
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

              <div className="armor-planner__mobile-result">
                <span>→ Missing</span>

                {isCrafting ? (
                  <span className="armor-planner__crafted-status">
                    Via craft
                  </span>
                ) : (
                  <strong>{missing}</strong>
                )}
              </div>

              {canCraft && (
                <label className="armor-planner__craft-option">
                  <input
                    type="checkbox"
                    checked={isCrafting}
                    onChange={() => onCraftingToggle(materialId)}
                  />
                  Craft missing
                </label>
              )}
            </article>
          );
        })}
      </div>

      {additionalCraftingGold > 0 && (
        <p className="armor-planner__crafting-cost">
          Additional crafting cost:{" "}
          <strong>{additionalCraftingGold} Gold</strong>
        </p>
      )}
    </section>
  );
}

export default ArmorPlanner;
