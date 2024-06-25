let isFirstPageLoadEmptyFieldCheck = true;
let isFirstPageLoadOutOfRangeCheck = true;

/*  
const breadParamsObj = {
  formula: {
    prefermFlourPercent,
    leavenHydr,
    hydrationPercent,
    saltPercent,
  },
  doughWeight,
  leaven: { flour, water },
  kneading: { flour, leaven, water, salt },
  total: { flour, water },
};
*/

export let breadParamsObj = {
  formula: {},
  doughWeight: null,
  leaven: {},
  kneading: {},
  total: {},
};

// Main Calculation on submit
export function calcMainSubmit() {
  let formData = new FormData(formMain);
  const formDataObj = formdataToObject(formData);

  // Validation - Empty fields
  const conditionHasEmpty = hasEmptyFieldsValidation(numberFieldsMain);

  if (conditionHasEmpty[0]) {
    if (isFirstPageLoadEmptyFieldCheck) {
      isFirstPageLoadEmptyFieldCheck = false;
    } else {
      setLocaleStorageMain();

      setTimeout(() => {
        alertEmptyFieldBox
          .open()
          .then((val) => {
            conditionHasEmpty[1].focus();
          })
          .catch((val) => { });
      }, 100);
    }

    resetAllResults();
    breadParamsObj = null;
    return false;
  }

  // Validation - Out of range fields
  const conditionOutOfRange = hasOutOfRangeFieldsValidation(numberFieldsMain);

  if (conditionOutOfRange[0]) {
    if (isFirstPageLoadOutOfRangeCheck) {
      isFirstPageLoadOutOfRangeCheck = false;
    } else {
      setLocaleStorageMain();
    }

    resetAllResults();
    breadParamsObj = null;
    return false;
  }

  // Input values
  const crustsCount = formDataObj.crustsCount;
  const crustWeight = formDataObj.crustWeight;
  const hydrationPercent = formDataObj.hydrationPercent / 100;
  const saltPercent = formDataObj.saltPercent / 100;
  const vinegarPercent = formDataObj.vinegarPercent / 100;
  const oilPercent = formDataObj.oilPercent / 100;
  // numberFieldsWater[0].setAttribute('max', formDataObj.hydrationPercent);
  // leavenHydrPredifinedResultElem.textContent =
  //   formDataObj.leavenHydratationPercent;

  // Calculated values
  const totalDoughWeight = getTotalDoughWeight(crustsCount, crustWeight);
  const totalFlour = getTotalFlour(totalDoughWeight, hydrationPercent, saltPercent);
  const totalSalt = getTotalIngredientWeight(totalFlour, saltPercent);
  const totalVinegar = getTotalIngredientWeight(totalFlour, vinegarPercent);
  const totalOil = getTotalIngredientWeight(totalFlour, oilPercent);
  const liquidIngredientsWeight = getTotalIngredientWeight(totalFlour, hydrationPercent);

  const totalWater = getTotalWaterWeight(liquidIngredientsWeight, totalVinegar, totalOil);
  // const leavenObj = getLeavenComponents(
  //   totalFlour,
  //   prefermFlourPercent,
  //   leavenHydratationPercent
  // );

  // Set kneading object
  const kneadingdObj = getIngredientsForKneading(
    totalFlour,
    totalWater,
    totalSalt,
    totalVinegar,
    totalOil,
    liquidIngredientsWeight
  );


  // Print calculated values
  printMainPrimaryResults(kneadingdObj);
  // printMainSecondaryResults();

  // Set breadParamsObj
  breadParamsObj = {
    formula: {},
    doughWeight: null,
    liquidIngreds: null,
    kneading: {},
  };

  breadParamsObj.formula.hydrationPercent = hydrationPercent;
  breadParamsObj.formula.saltPercent = saltPercent;
  breadParamsObj.formula.vinegarPercent = vinegarPercent;
  breadParamsObj.formula.oilPercent = oilPercent;
  breadParamsObj.doughWeight = totalDoughWeight;
  breadParamsObj.liquidIngreds = liquidIngredientsWeight;
  breadParamsObj.kneading.flour = kneadingdObj.flour;
  breadParamsObj.kneading.water = kneadingdObj.water;
  breadParamsObj.kneading.salt = kneadingdObj.salt;
  breadParamsObj.kneading.vinegar = kneadingdObj.vinegar;
  breadParamsObj.kneading.oil = kneadingdObj.oil;

  // Set localStorage
  setLocaleStorageMain();

  if (isFirstPageLoadEmptyFieldCheck || isFirstPageLoadOutOfRangeCheck) {
    isFirstPageLoadEmptyFieldCheck = false;
    isFirstPageLoadOutOfRangeCheck = false;
  } else {
    checkmarkAlertGreen();
  }

  return true;

  // Inner functions
  function printMainPrimaryResults(kneadingdObj) {
    doughWeightElement.textContent = totalDoughWeight.toFixed(0);
    flourWeightElement.textContent = kneadingdObj.flour.toFixed(0);
    saltWeightElement.textContent = kneadingdObj.salt.toFixed(0);
    liquidIngredsWeightElement.textContent = kneadingdObj.liquidIngredientsWeight.toFixed(0);
    waterWeightElement.textContent = kneadingdObj.water.toFixed(0);
    vinegarWeightElement.textContent = kneadingdObj.vinegar.toFixed(0);
    oilWeightElement.textContent = kneadingdObj.oil.toFixed(0);


  }

  function printMainSecondaryResults() {
    // flourTotalElement.textContent = totalFlour.toFixed(0);
    // waterTotalElement.textContent = totalWater.toFixed(0);
  }
}

export function getStorageAndCalculateMain() {
  getLocaleStorageMain();
  calcMainSubmit();
}

// IMPORTS
import { doughWeightElement, flourWeightElement, formMain, liquidIngredsWeightElement, numberFieldsMain, oilWeightElement, saltWeightElement, vinegarWeightElement, waterWeightElement } from './elements.js';

import {
  hasEmptyFieldsValidation,
  hasOutOfRangeFieldsValidation,
} from './validation.js';

import { alertEmptyFieldBox, checkmarkAlertGreen } from './alerts.js';
import { resetAllResults } from './reset.js';
import { getLocaleStorageMain, setLocaleStorageMain } from './storage.js';

import {
  getTotalDoughWeight,
  getTotalFlour,
  getIngredientsForKneading,
  getTotalIngredientWeight,
  getTotalWaterWeight,
} from './math.js';

import { formdataToObject } from './helpers.js';
