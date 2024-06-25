// Reset functions

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

// Global
export function resetAllResults() {
  resetMainPrimaryResults();
  resetMainSecondaryResults();
}

// Main
export function resetMainForm() {
  resetMainInputs();
  resetMainPrimaryResults();
  resetMainSecondaryResults();
}

function resetMainInputs() {
  formMain.reset();
}

function resetMainPrimaryResults() {
  doughWeightElement.textContent = '####';
  flourWeightElement.textContent = '####';
  saltWeightElement.textContent = '####';
  waterWeightElement.textContent = '####';
}

function resetMainSecondaryResults() {
  liquidIngredsWeightElement.textContent = '###';
  vinegarWeightElement.textContent = '###';
  oilWeightElement.textContent = '###';
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
