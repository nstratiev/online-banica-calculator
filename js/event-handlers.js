export function onSubmit_initialLoad(ev) {
  onSubmit(ev, formMain, { isFirstPageLoad: true }, printResult_formMain);
}

export function onSubmit_fMain(ev) {
  onSubmit(ev, formMain, { isFirstPageLoad: false }, printResult_formMain, resetResults_fMain);
}

export function onSave_fMain(ev) {
  onSave(ev, formMain);
}

// Basic
export function onGlobalSave(ev) {
  const allForms = document.querySelectorAll('form');

  for (const form of allForms) {
    onSave(ev, form);
  }

  checkmarkAlertGreen();
}

function onSave(ev, formElem) {
  const currFormData = getFormDataToObject(formElem);
  const currFormName = formElem.name;
  setLocalStorage(currFormData, currFormName);

  checkmarkAlertGreen();
}

function onSubmit(ev, formElem, loadingConfig, printFunc, resetFormResultsFunc) {
  if (loadingConfig.isFirstPageLoad !== true) {
    ev.preventDefault();
  }

  const data = getData(formElem, loadingConfig, resetFormResultsFunc);

  if (data === false) {
    return;
  }

  setLocalStorage(data, formElem.name);
  const resultsData = calculate_fMain(data);
  printFunc(resultsData);

  if (loadingConfig.isFirstPageLoad !== true) {
    checkmarkAlertGreen();
  }

}


import { printResult_formMain } from './print.js';
import { formMain } from './elements.js';
import { getData, getFormDataToObject } from './generic.js';
import { setLocalStorage } from './storage.js';
import { resetResults_fMain } from './reset.js';
import { checkmarkAlertGreen } from './alerts.js';
import { calculate_fMain } from './math.js';
