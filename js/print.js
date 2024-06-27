// ##### Print functions #####
export function printResultsMain(kneadingdObj) {
  printResult(kneadingdObj.doughWeight, doughWeightElement, 0);
  printResult(kneadingdObj.flour, flourWeightElement, 0);
  printResult(kneadingdObj.salt, saltWeightElement, 0);
  printResult(kneadingdObj.liquidIngredients, liquidIngredsWeightElement, 0, { prefix: '', postfix: ' g' });
  printResult(kneadingdObj.water, waterWeightElement, 0);
  printResult(kneadingdObj.vinegar, vinegarWeightElement, 0);
  printResult(kneadingdObj.oil, oilWeightElement, 0);
}

export function printResult(
  value,
  resultElem,
  toFixedIndex,
  additionalTextObj
) {
  // additionalTextObj = {prefix: '', postfix: ''};
  let result;

  if (value) {
    if (additionalTextObj) {
      result = `${additionalTextObj.prefix}${value.toFixed(toFixedIndex)}${additionalTextObj.postfix
        }`;
    } else {
      result = `${value.toFixed(toFixedIndex)}`;
    }
  } else {
    result = '';
  }

  resultElem.style.fontWeight = 'bold';
  resultElem.textContent = result;
}

// IMPORTS
import { doughWeightElement, flourWeightElement, liquidIngredsWeightElement, oilWeightElement, saltWeightElement, vinegarWeightElement, waterWeightElement } from './elements.js';
