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

  const orderedRareMaterials = buildRareMaterialOrder();

  const additionalCraftingGold = craftingRequirements.reduce(
    (total, requirement) => total + requirement.gold,
    0,
  );

  function renderDesktopRow({ materialId, required, missing, depth = 0 }) {
    const material = getMaterialById(materialId);

    if (!material) {
      return null;
    }

    const canCraft = material.type === "rare" && hasCraftingRecipe(materialId);

    const isCrafting = Boolean(craftingSelections[materialId]);

    return (
      <tr key={materialId}>
        <td>
          <div
            className="armor-planner__material"
            style={{ "--material-depth": depth }}
          >
            <span>{material.name}</span>

            {canCraft && missing > 0 && (
              <label className="armor-planner__craft-option">
                <input
                  type="checkbox"
                  checked={isCrafting}
                  onChange={() => onCraftingToggle(materialId)}
                />
                Craft missing
              </label>
            )}
          </div>
        </td>

        <td>{formatNeed(materialId, required)}</td>

        <td>
          <input
            type="number"
            min="0"
            step="1"
            value={inventory[materialId] ?? ""}
            aria-label={`Owned ${material.name}`}
            onChange={(event) =>
              onInventoryChange(materialId, event.target.value)
            }
          />
        </td>

        <td>
          {isCrafting && missing > 0 ? (
            <span className="armor-planner__crafted-status">Via craft</span>
          ) : (
            missing
          )}
        </td>
      </tr>
    );
  }

  function renderMobileItem({ materialId, required, missing, depth = 0 }) {
    const material = getMaterialById(materialId);

    if (!material) {
      return null;
    }

    const canCraft = material.type === "rare" && hasCraftingRecipe(materialId);

    const isCrafting = Boolean(craftingSelections[materialId]);

    const className = [
      "armor-planner__mobile-item",
      material.type === "rare"
        ? "armor-planner__mobile-item--rare"
        : "armor-planner__mobile-item--common",
    ].join(" ");

    return (
      <article
        className={className}
        key={materialId}
        style={{ "--material-depth": depth }}
      >
        <div className="armor-planner__mobile-header">
          <strong>{material.name}</strong>
          <span>{formatNeed(materialId, required)}</span>
        </div>

        <label className="armor-planner__owned-field">
          <span>Owned</span>

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

          {isCrafting && missing > 0 ? (
            <span className="armor-planner__crafted-status">Via craft</span>
          ) : (
            <strong>{missing}</strong>
          )}
        </div>

        {canCraft && missing > 0 && (
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
  }

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

            {commonPlannerMaterials.length > 0 && (
              <tbody className="armor-planner__group">
                <tr className="armor-planner__group-title">
                  <th colSpan="4">Common materials</th>
                </tr>

                {commonPlannerMaterials.map((material) =>
                  renderDesktopRow(material),
                )}
              </tbody>
            )}

            {orderedRareMaterials.length > 0 && (
              <tbody className="armor-planner__group">
                <tr className="armor-planner__group-title">
                  <th colSpan="4">Rare materials</th>
                </tr>

                {orderedRareMaterials.map((material) =>
                  renderDesktopRow(material),
                )}
              </tbody>
            )}
          </table>
        </div>
      </div>

      <div className="armor-planner__mobile-list">
        {commonPlannerMaterials.length > 0 && (
          <div className="armor-planner__mobile-group">
            <h4>Common materials</h4>

            <div className="armor-planner__mobile-group-content">
              {commonPlannerMaterials.map((material) =>
                renderMobileItem(material),
              )}
            </div>
          </div>
        )}

        {orderedRareMaterials.length > 0 && (
          <div className="armor-planner__mobile-group">
            <h4>Rare materials</h4>

            <div className="armor-planner__mobile-group-content">
              {orderedRareMaterials.map((material) =>
                renderMobileItem(material),
              )}
            </div>
          </div>
        )}
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
