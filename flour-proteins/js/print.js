// ##### Print [Start] #####
export function printResult_formMain(resultsData) {
  const d = resultsData;
  const el = resultElementsObj_fMain;

  printResult(d.flourMinProteinsWeight, el.flourMinProteinsWeight, 0);
  printResult(d.flourMaxProteinsWeight, el.flourMaxProteinsWeight, 0);
  printResult(d.finalNotes, el.finalNotes, 0);
}

function printResult(value, resultElem, toFixedIndex, additionalTextObj) {
  // additionalTextObj = {prefix: '', postfix: ''};
  let result;

  if (typeof value === 'string') {
    result = value.split('<br>');

    resultElem.innerHTML = result.join('<br>');
    return;
  }

  if (value) {
    if (additionalTextObj) {
      result = `${additionalTextObj.prefix}${value.toFixed(toFixedIndex)}${additionalTextObj.postfix}`;
    } else {
      resultElem.style.fontWeight = 'bold';
      result = `${value.toFixed(toFixedIndex)}`;
    }

  } else {
    result = '';
  }

  resultElem.textContent = result;
}

// IMPORTS
import { resultElementsObj_fMain } from './elements.js';

// ##### Print [End] #####
