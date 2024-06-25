// EVENT LISTENERS
document.addEventListener('DOMContentLoaded', function () {
  getStorageAndCalculateMain();

  // TEST
  const decimalOneDigitInputs = document.querySelectorAll('input[step="0.1"]');
  decimalOneDigitInputs.forEach(el => {
    el.addEventListener('focusout', () => validationForDecimalPoint(el));
  });

  function validationForDecimalPoint(numField) {
    const numValue = numField.value;

    if (numValue !== '' && numValue.includes('.') === false) {
      numField.value = numValue + '.0';
    }
  }

});


// -- OnEnter form listeners
addOnEnterFormListener(formMain, calculateAllForms);
// addOnEnterFormListener(formMain, calcMainSubmit);

// -- Focusout input listeners
addOnFocusOutInputsListener(numberFieldsMain);

// -- OnInput input listeners
// numberFieldsMain[1].addEventListener('input', () => {
//   leavenHydrPredifinedResultElem.textContent = numberFieldsMain[1].value;
// });



// -- Button-to-top listeners
window.addEventListener('scroll', onScreenScroll);
btnToTop.addEventListener('click', goToScreenTop);


// -- Buttons - global
btnGlobalReset.addEventListener('click', resetGlobalLocalStorage);
btnGlobalSave.addEventListener('click', setGlobalLocalStorage);


// -- Buttons listeners
document.addEventListener('click', (e) => {
  if (e.target.tagName !== 'BUTTON') {
    return;
  }

  const btnsGroupClassName = e.target.parentElement.className;
  const btnClassName = e.target.className;

  if (btnsGroupClassName.includes('-main')) {
    // console.log('MAIN');
    if (btnClassName === 'btn-submit') {
      calculateAllForms();
      // calcMainSubmit();
    } else if (btnClassName === 'btn-reset') {
      resetMainForm();
      checkmarkAlertGreen();
    } else if (btnClassName === 'btn-save') {
      setLocaleStorageMain();
      checkmarkAlertGreen();
    }
  }

});






function calculateAllForms() {
  calcMainSubmit();
}


import { checkmarkAlertGreen } from './alerts.js';
import { calcMainSubmit, getStorageAndCalculateMain } from './calcMainForm.js';
// Imports
import {
  btnGlobalReset,
  btnGlobalSave,
  btnToTop,
  formMain,
  numberFieldsMain,
} from './elements.js';
import { addOnEnterFormListener } from './helpers.js';
import { resetGlobalLocalStorage, resetMainForm } from './reset.js';

import { onScreenScroll, goToScreenTop } from './scroll.js';
import { setGlobalLocalStorage, setLocaleStorageMain } from './storage.js';
import { addOnFocusOutInputsListener } from './validation.js';
