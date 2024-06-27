// Unused functions REPO
function setDoughParamsObject() {
  /*   const doughParamsObj = {
      formula: {
        hydrationPercent,
        saltPercent,
        vinegarPercent,
        oilPercent,
      },
      doughWeight,
      liquidIngreds,
      kneading: { flour, water, salt, vinegar, oil },
    };
   */
  doughParamsObj = {
    formula: {},
    doughWeight: null,
    liquidIngreds: null,
    kneading: {},
  };

  doughParamsObj.formula.hydrationPercent = hydrationPercent;
  doughParamsObj.formula.saltPercent = saltPercent;
  doughParamsObj.formula.vinegarPercent = vinegarPercent;
  doughParamsObj.formula.oilPercent = oilPercent;
  doughParamsObj.doughWeight = totalDoughWeight;
  doughParamsObj.liquidIngreds = totalLiquidIngredients;
  doughParamsObj.kneading.flour = kneadingdObj.flour;
  doughParamsObj.kneading.water = kneadingdObj.water;
  doughParamsObj.kneading.salt = kneadingdObj.salt;
  doughParamsObj.kneading.vinegar = kneadingdObj.vinegar;
  doughParamsObj.kneading.oil = kneadingdObj.oil;
}

export function preventDefaultOnEnterKeyPress(element) {
  element.addEventListener('keydown', function (e) {
    if (e.keyCode === 13) {
      e.preventDefault();
    }
  });
}

function getLeavenComponents(
  totalFlour,
  prefermentedFlourPercent,
  leavenHydratationPercent
) {
  const obj = {};
  obj.leavenFlour = totalFlour * prefermentedFlourPercent;
  obj.leavenWater = obj.leavenFlour * leavenHydratationPercent;
  obj.leavenTotal = obj.leavenFlour + obj.leavenWater;

  // const obj = {leavenTotal: '', leavenFlour: '', leavenWater: ''};
  return obj;
}

function setIngredientsForKneadingObj(
  totalFlour,
  totalWater,
  totalSalt,
  leavenFlour,
  leavenWater
) {
  const obj = {};
  obj.flour = totalFlour - leavenFlour;
  obj.water = totalWater - leavenWater;
  obj.salt = totalSalt;

  // const obj = { flour: '', water: '', salt: '' };
  return obj;
}
