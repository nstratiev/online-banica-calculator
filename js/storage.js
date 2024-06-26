// ##### Locale Storage functions #####
export function setGlobalLocalStorage() {
  setLocaleStorageMain();
  checkmarkAlertGreen();
}

// Main localStorage
export function getLocaleStorageMain() {
  getLocalStorageAndFilInputs('formMain');
}

export function setLocaleStorageMain() {
  setLocalStorage('formMain', numberFieldsMain);
}

// Basic functions
function setLocalStorage(formItemStr, numberFieldsCollection) {
  const obj = {};

  for (const numField of numberFieldsCollection) {
    obj[numField.name] = numField.value;
  }

  localStorage.setItem(formItemStr, JSON.stringify(obj));
}

function getLocalStorageAndFilInputs(formItemStr) {
  let formStorage = localStorage.getItem(formItemStr);
  formStorage = JSON.parse(formStorage);

  for (const key in formStorage) {
    const val = formStorage[key];
    const elem = document.querySelector(`#${camelToKebapCase(key)}`);
    elem.value = val;
  }

  return formStorage;
}

// IMPORTS
import {
  numberFieldsMain,
} from './elements.js';
import { camelToKebapCase } from './helpers.js';
import { checkmarkAlertGreen } from './alerts.js';
