// --- Math functions
export function getTotalDoughWeight(loafsCount, loafWeight) {
  return loafsCount * loafWeight;
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

export function getIngredientsForKneading(
  totalFlour,
  totalWater,
  totalSalt,
  totalVinegar,
  totalOil,
  liquidIngredientsWeight
) {
  const obj = {};
  obj.flour = totalFlour;
  obj.water = totalWater;
  obj.salt = totalSalt;
  obj.vinegar = totalVinegar;
  obj.oil = totalOil
  obj.liquidIngredientsWeight = liquidIngredientsWeight

  // const obj = { flour: '', water: '', salt: '' };
  return obj;
}
