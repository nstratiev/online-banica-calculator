export function onReset_fMain() {
  onReset(null, formMain, resetResults_fMain);
}

export function resetResults_fMain() {
  resetResults(resultElementsArr_fMain);
}

// Basic
export function onGlobalReset() {
  const configArr = inactivateAllFormsAndLinks(true, []);

  globalResetConfirmDialog.open()
    .then((msg) => {
      clearLocalStorageGlobal();
      formMain.reset();
      checkmarkAlertGreen();
      location.reload();
    })
    .catch((msg) => { })
    .finally(() => inactivateAllFormsAndLinks(false, configArr));
}

function resetResults(resultElementsCollection) {
  resultElementsCollection.forEach(el => {
    el.style.fontWeight = 'initial';

    if (el.className.includes('-secondary') === false) {
      el.textContent = '####';
    } else {
      el.textContent = '###';
    }
  });
}

function onReset(ev, formElem, resetResultHandler) {
  formElem.reset();
  resetFieldsOutline(formElem);
  resetResultHandler();

  checkmarkAlertGreen();
}

function resetFieldsOutline(formElem) {
  const formInputsCollection = formElem.querySelectorAll('input');

  for (const field of formInputsCollection) {
    field.style.outline = 'none';
  }
}


import { clearLocalStorageGlobal } from './storage.js';
import { resultElementsArr_fMain, formMain, } from './elements.js';
import { checkmarkAlertGreen, globalResetConfirmDialog } from './alerts.js';
import { inactivateAllFormsAndLinks } from './generic.js';
