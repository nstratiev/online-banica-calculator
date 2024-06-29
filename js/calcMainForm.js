let isFirstPageLoadEmptyFieldCheck = true;
let isFirstPageLoadOutOfRangeCheck = true;

export function getStorageAndCalculateMain() {
  getLocaleStorageMain();
  calcMainSubmit();
}

// Main Calculation on submit
export function calcMainSubmit() {
  let formData = new FormData(formMain);
  const formDataObj = formdataToObject(formData);

  // Validation - Empty fields
  if (haveEmptyFieldsCheck()) {
    return false;
  }

  // Validation - Out of range fields
  const hasOutOfRangeFields = hasOutOfRangeFieldValidation(numberFieldsMain);

  if (hasOutOfRangeFields[0]) {
    if (isFirstPageLoadOutOfRangeCheck) {
      isFirstPageLoadOutOfRangeCheck = false;
    } else {
      setLocaleStorageMain();
    }

    resetAllResultsMain();
    return false;
  }

  // Get input values
  const crustsCount = formDataObj.crustsCount;
  const crustWeight = formDataObj.crustWeight;
  const hydrationPercent = formDataObj.hydrationPercent / 100;
  const saltPercent = formDataObj.saltPercent / 100;
  const vinegarPercent = formDataObj.vinegarPercent / 100;
  const oilPercent = formDataObj.oilPercent / 100;

  // Calculate result values
  const totalDoughWeight = getTotalDoughWeight(crustsCount, crustWeight);
  const totalFlour = getTotalFlour(totalDoughWeight, hydrationPercent, saltPercent);
  const totalSalt = getTotalIngredientWeight(totalFlour, saltPercent);
  const totalVinegar = getTotalIngredientWeight(totalFlour, vinegarPercent);
  const totalOil = getTotalIngredientWeight(totalFlour, oilPercent);
  const totalLiquidIngredients = getTotalIngredientWeight(totalFlour, hydrationPercent);
  const totalWater = getTotalWaterWeight(totalLiquidIngredients, totalVinegar, totalOil);

  // Set kneading object
  const kneadingdObj = setIngredientsForKneadingObj(
    totalDoughWeight,
    totalFlour,
    totalWater,
    totalSalt,
    totalVinegar,
    totalOil,
    totalLiquidIngredients
  );

  // Print calculated values
  printResultsMain(kneadingdObj);

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
}

function haveEmptyFieldsCheck() {
  const hasEmptyField = hasEmptyFieldValidation(numberFieldsMain);

  if (hasEmptyField[0]) {
    if (isFirstPageLoadEmptyFieldCheck) {
      isFirstPageLoadEmptyFieldCheck = false;

    } else {
      setLocaleStorageMain();

      setTimeout(() => {
        alertEmptyFieldBox
          .open()
          .then((val) => {
            hasEmptyField[1].style.outline = '3px solid orange';
            hasEmptyField[1].focus();
          })
          .catch((err) => console.log(err));
      }, 100);
    }

    resetAllResultsMain();
    return true;
  }

  return false;
}

// IMPORTS
import { formMain, numberFieldsMain } from './elements.js';

import {
  hasEmptyFieldValidation,
  hasOutOfRangeFieldValidation,
} from './validation.js';

import { alertEmptyFieldBox, checkmarkAlertGreen } from './alerts.js';
import { resetAllResultsMain } from './reset.js';
import { getLocaleStorageMain, setLocaleStorageMain } from './storage.js';

import {
  getTotalDoughWeight,
  getTotalFlour,
  setIngredientsForKneadingObj,
  getTotalIngredientWeight,
  getTotalWaterWeight,
} from './math.js';

import { formdataToObject } from './helpers.js';
import { printResultsMain } from './print.js';

