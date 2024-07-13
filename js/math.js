export function calculate_fMain(data) {
  const doughWeight = getTotalDoughWeight(data.crustsCount, data.crustWeight);
  const flourWeight = getTotalFlour(doughWeight, data.hydrationPercent, data.saltPercent);
  const saltWeight = getTotalIngredientWeight(flourWeight, data.saltPercent);
  const liquidIngredsWeight = getTotalIngredientWeight(flourWeight, data.hydrationPercent);
  const vinegarWeight = getTotalIngredientWeight(flourWeight, data.vinegarPercent);
  const oilWeight = getTotalIngredientWeight(flourWeight, data.oilPercent);
  const waterWeight = getTotalWaterWeight(liquidIngredsWeight, vinegarWeight, oilWeight);

  return { doughWeight, flourWeight, saltWeight, liquidIngredsWeight, vinegarWeight, oilWeight, waterWeight };
}

function getTotalDoughWeight(crustsCount, crustWeight) {
  return Number(crustsCount) * Number(crustWeight);
}

function getTotalFlour(totalDoughWeight, hydrationPercentValue, saltPercent) {
  return totalDoughWeight / (1 + Number(hydrationPercentValue / 100) + Number(saltPercent / 100));
}

function getTotalWaterWeight(liquidIngredientsWeight, vinegarWeight, oilWeight) {
  return liquidIngredientsWeight - (vinegarWeight + oilWeight);
}

function getTotalIngredientWeight(totalFlour, ingredientPercentValue) {
  return totalFlour * (Number(ingredientPercentValue) / 100);
}
