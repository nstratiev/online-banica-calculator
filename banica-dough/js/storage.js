// ##### Storage [Start] #####
const calculatorName = 'calcBanica';

export function setLocalStorage(dataObj, formName) {
  const calculatorData = JSON.parse(localStorage.getItem(calculatorsCategory));

  calculatorData[calculatorName] = {
    [formName]: dataObj
  };

  const jsonData = JSON.stringify(calculatorData);
  localStorage.setItem(calculatorsCategory, jsonData);
}

export function getLocalStorage(formName) {
  const calculatorData = JSON.parse(localStorage.getItem(calculatorsCategory));

  return calculatorData[calculatorName][formName];
}

export function clearLocalStorageGlobal() {
  localStorage.clear();
}

export function populateLocaleStorageData(formsArr) {
  for (const formElem of formsArr) {
    const localStorageObj = getLocalStorage(formElem.name);

    if (localStorageObj === null) {
      console.info('No localStorage for this form ...');
      return null;
    }

    for (const key in localStorageObj) {
      const target = formElem[key];
      // const target = formElem.querySelector(`input[name=${key}]`);
      target.value = localStorageObj[key];
    }

  }

}

// IMPORTS
import { calculatorsCategory } from '../../global/js/storage.js';
// ##### Storage [End] #####
