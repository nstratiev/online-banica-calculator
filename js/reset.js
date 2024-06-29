// ##### Reset functions #####

// Global Reset Button
export function resetGlobalLocalStorage() {
  btnGlobalReset.style.pointerEvents = 'none';
  btnGlobalSave.style.pointerEvents = 'none';
  btnToTop.style.pointerEvents = 'none';

  resetMainForm();
  checkmarkAlertGreen();

  setTimeout(() => {
    globalResetConfirmDialog
      .open()
      .then((val) => {
        localStorage.clear();
        checkmarkAlertGreen();
        location.reload();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        btnGlobalReset.style.pointerEvents = 'auto';
        btnGlobalSave.style.pointerEvents = 'auto';
        btnToTop.style.pointerEvents = 'auto';
      });
  }, 200);
}

// Main
export function resetMainForm() {
  resetFormInputsMain();
  resetPrimaryResultsMain();
  resetSecondaryResultsMain();
}

function resetFormInputsMain() {
  resetFormInputs(formMain);
}

export function resetAllResultsMain() {
  resetPrimaryResultsMain();
  resetSecondaryResultsMain();
}

function resetPrimaryResultsMain() {
  doughWeightElement.style.fontWeight = 'initial';
  doughWeightElement.textContent = '####';
  flourWeightElement.style.fontWeight = 'initial';
  flourWeightElement.textContent = '####';
  saltWeightElement.style.fontWeight = 'initial';
  saltWeightElement.textContent = '####';
  waterWeightElement.style.fontWeight = 'initial';
  waterWeightElement.textContent = '####';
}

function resetSecondaryResultsMain() {
  liquidIngredsWeightElement.style.fontWeight = 'initial';
  liquidIngredsWeightElement.textContent = '###';
  vinegarWeightElement.style.fontWeight = 'initial';
  vinegarWeightElement.textContent = '###';
  oilWeightElement.style.fontWeight = 'initial';
  oilWeightElement.textContent = '###';
}

function resetFormInputs(formElem) {
  formElem.reset();
}

// IMPORTS
import { globalResetConfirmDialog, checkmarkAlertGreen } from './alerts.js';
import {
  btnGlobalReset,
  btnGlobalSave,
  btnToTop,
  doughWeightElement,
  flourWeightElement,
  formMain,
  liquidIngredsWeightElement,
  oilWeightElement,
  saltWeightElement,
  vinegarWeightElement,
  waterWeightElement
} from './elements.js';
