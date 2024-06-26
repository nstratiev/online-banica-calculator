// ##### Math functions #####
export function getTotalDoughWeight(crustsCount, crustWeight) {
  return crustsCount * crustWeight;
}

export function getTotalFlour(totalDoughWeight, hydrationPercent, saltPercent) {
  return totalDoughWeight / (1 + hydrationPercent + saltPercent);
}

export function getTotalWaterWeight(liquidIngredientsWeight, vinegarWeight, oilWeight) {
  return liquidIngredientsWeight - (vinegarWeight + oilWeight);
}

export function getTotalIngredientWeight(totalFlour, ingredientPercent) {
  return totalFlour * ingredientPercent;
}

export function setIngredientsForKneadingObj(
  totalFlour,
  totalWater,
  totalSalt,
  totalVinegar,
  totalOil,
  totalLiquidIngredients
) {
  const obj = {};
  obj.flour = totalFlour;
  obj.water = totalWater;
  obj.salt = totalSalt;
  obj.vinegar = totalVinegar;
  obj.oil = totalOil
  obj.liquidIngredients = totalLiquidIngredients

  return obj;
}
