export function onSubmit_initialLoad(ev) {
  onSubmit(ev, formMain, { isFirstPageLoad: true }, printResult_formMain);
}

export function onSubmit_fMain(ev) {
  onSubmit(ev, formMain, { isFirstPageLoad: false }, printResult_formMain, resetResults_fMain, '#results-fMain');
}

export function onSave_fMain(ev) {
  onSave(ev, formMain, true);
}

// Basic
export function onGlobalSave(ev) {
  const allForms = document.querySelectorAll('form');

  for (const form of allForms) {
    onSave(ev, form, false);
  }

  checkmarkAlertGreen(true);
}

function onSave(ev, formElem, hasCheckmark) {
  const currFormData = getFormDataToObject(formElem);
  const currFormName = formElem.name;
  setLocalStorage(currFormData, currFormName);

  checkmarkAlertGreen(hasCheckmark);
}

function onSubmit(ev, formElem, loadingConfig, printFunc, resetFormResultsFunc, href) {
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
  resetFieldsOutline(formElem);

  if (loadingConfig.isFirstPageLoad !== true) {
    checkmarkAlertGreen(true);

    const screenWidth = window.screen.width;
    const screenAvailWidth = window.screen.availWidth;

    if (href) {
      if (screenWidth <= 680 || screenAvailWidth <= 680) {
        location.href = href;
      }

    }
  }

}


import { printResult_formMain } from './print.js';
import { formMain } from './elements.js';
import { getData, getFormDataToObject } from './generic.js';
import { setLocalStorage } from './storage.js';
import { resetFieldsOutline, resetResults_fMain } from './reset.js';
import { checkmarkAlertGreen } from './alerts.js';
import { calculate_fMain } from './math.js';
import { } from "./reset.js";
