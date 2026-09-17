import { useState } from "react";

import aggregateMaterials from "../utils/aggregateMaterials";
import calculateCraftingRequirements from "../utils/calculateCraftingRequirements";
import calculateMissingMaterials from "../utils/calculateMissingMaterials";

function useArmorPlanning(armor, materials, craftingRecipes) {
  const [craftingSelections, setCraftingSelections] = useState({});
  const [inventory, setInventory] = useState({});
  const [isCheckingMaterials, setIsCheckingMaterials] = useState(false);

  const materialStatus = calculateMissingMaterials(
    armor.cost.materials,
    inventory,
  );

  const craftingRequirements = calculateCraftingRequirements(
    materialStatus,
    materials,
    craftingRecipes,
    craftingSelections,
    inventory,
  );

  const actualMaterialNeeds = aggregateMaterials(
    materialStatus,
    craftingRequirements,
    inventory,
    materials,
  );

  function startPlanning() {
    setIsCheckingMaterials(true);
  }

  function toggleCrafting(materialId) {
    setCraftingSelections((currentSelections) => ({
      ...currentSelections,
      [materialId]: !currentSelections[materialId],
    }));
  }

  function updateInventory(materialId, value) {
    const quantity = value === "" ? 0 : Math.max(0, Math.floor(Number(value)));

    setInventory((currentInventory) => ({
      ...currentInventory,
      [materialId]: quantity,
    }));
  }

  return {
    materialStatus,
    actualMaterialNeeds,
    craftingRequirements,
    craftingSelections,
    inventory,
    isCheckingMaterials,
    startPlanning,
    toggleCrafting,
    updateInventory,
  };
}

export default useArmorPlanning;
