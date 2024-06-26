let isFirstPageLoadEmptyFieldCheck = true;
let isFirstPageLoadOutOfRangeCheck = true;

export let doughParamsObj = null;

export function getStorageAndCalculateMain() {
  getLocaleStorageMain();
  calcMainSubmit();
}

// Main Calculation on submit
export function calcMainSubmit() {
  let formData = new FormData(formMain);
  const formDataObj = formdataToObject(formData);

  // Validation - Empty fields
  const conditionHasEmptyFields = hasEmptyFieldsValidation(numberFieldsMain);

  if (conditionHasEmptyFields[0]) {
    if (isFirstPageLoadEmptyFieldCheck) {
      isFirstPageLoadEmptyFieldCheck = false;

    } else {
      setLocaleStorageMain();

      setTimeout(() => {
        alertEmptyFieldBox
          .open()
          .then((val) => {
            conditionHasEmptyFields[1].focus();
          })
          .catch((val) => { });
      }, 100);
    }

    resetAllResults();
    doughParamsObj = null;
    return false;
  }

  // Validation - Out of range fields
  const conditionOutOfRangeFields = hasOutOfRangeFieldsValidation(numberFieldsMain);

  if (conditionOutOfRangeFields[0]) {
    if (isFirstPageLoadOutOfRangeCheck) {
      isFirstPageLoadOutOfRangeCheck = false;
    } else {
      setLocaleStorageMain();
    }

    resetAllResults();
    doughParamsObj = null;
    return false;
  }

  // Input values
  const crustsCount = formDataObj.crustsCount;
  const crustWeight = formDataObj.crustWeight;
  const hydrationPercent = formDataObj.hydrationPercent / 100;
  const saltPercent = formDataObj.saltPercent / 100;
  const vinegarPercent = formDataObj.vinegarPercent / 100;
  const oilPercent = formDataObj.oilPercent / 100;

  // Calculated values
  const totalDoughWeight = getTotalDoughWeight(crustsCount, crustWeight);
  const totalFlour = getTotalFlour(totalDoughWeight, hydrationPercent, saltPercent);
  const totalSalt = getTotalIngredientWeight(totalFlour, saltPercent);
  const totalVinegar = getTotalIngredientWeight(totalFlour, vinegarPercent);
  const totalOil = getTotalIngredientWeight(totalFlour, oilPercent);
  const totalLiquidIngredients = getTotalIngredientWeight(totalFlour, hydrationPercent);
  const totalWater = getTotalWaterWeight(totalLiquidIngredients, totalVinegar, totalOil);

  // Set kneading object
  const kneadingdObj = setIngredientsForKneadingObj(
    totalFlour,
    totalWater,
    totalSalt,
    totalVinegar,
    totalOil,
    totalLiquidIngredients
  );

  // Print calculated values
  printResultsMain(kneadingdObj);

  // Set doughParamsObj
  setDoughParamsObject();

  // Set localStorage
  setLocaleStorageMain();

  // Checkmark visibility
  if (isFirstPageLoadEmptyFieldCheck || isFirstPageLoadOutOfRangeCheck) {
    isFirstPageLoadEmptyFieldCheck = false;
    isFirstPageLoadOutOfRangeCheck = false;
  } else {
    checkmarkAlertGreen();
  }

  return true;

  // Inner functions
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

  function printResultsMain(kneadingdObj) {
    printResult(totalDoughWeight, doughWeightElement, 0);
    printResult(kneadingdObj.flour, flourWeightElement, 0);
    printResult(kneadingdObj.salt, saltWeightElement, 0);
    printResult(kneadingdObj.liquidIngredients, liquidIngredsWeightElement, 0, { prefix: '', postfix: ' g' });
    printResult(kneadingdObj.water, waterWeightElement, 0);
    printResult(kneadingdObj.vinegar, vinegarWeightElement, 0);
    printResult(kneadingdObj.oil, oilWeightElement, 0);
  }
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
  setIngredientsForKneadingObj,
  getTotalIngredientWeight,
  getTotalWaterWeight,
} from './math.js';

import { formdataToObject } from './helpers.js';
import { printResult } from './print.js';

