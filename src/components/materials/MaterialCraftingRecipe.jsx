import CurrencyAmount from "../ui/CurrencyAmount";

function MaterialCraftingRecipe({ recipe, materials }) {
  function getMaterialById(materialId) {
    return materials.find((material) => material.id === materialId);
  }

  return (
    <div className="material-details__recipe">
      <span className="material-details__recipe-label">Recipe</span>

      <div className="material-details__ingredients">
        {recipe.ingredients.map(({ materialId, quantity }) => {
          const ingredient = getMaterialById(materialId);

          if (!ingredient) {
            return null;
          }

          return (
            <span
              key={materialId}
              className="material-details__ingredient"
              title={`${quantity} ${ingredient.name}`}
            >
              <strong>{quantity}</strong>

              <img src={ingredient.icon} alt={ingredient.name} />
            </span>
          );
        })}

        {recipe.gold > 0 && (
          <span className="material-details__recipe-gold">
            <strong>
              <CurrencyAmount goldAmount={recipe.gold} />
            </strong>
          </span>
        )}
      </div>
    </div>
  );
}

export default MaterialCraftingRecipe;
