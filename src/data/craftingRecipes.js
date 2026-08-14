const craftingRecipes = [
  {
    id: "lump-of-charcoal-crafting",
    outputMaterialId: "lump-of-charcoal",
    outputQuantity: 1,
    ingredients: [
      {
        materialId: "wood-plank",
        quantity: 10,
      },
    ],
    gold: 200,
  },
  {
    id: "steel-ingot-crafting",
    outputMaterialId: "steel-ingot",
    outputQuantity: 1,
    ingredients: [
      {
        materialId: "lump-of-charcoal",
        quantity: 1,
      },
      {
        materialId: "iron-ingot",
        quantity: 10,
      },
    ],
    gold: 200,
  },
];

export default craftingRecipes;
