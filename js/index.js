// EVENT LISTENERS
document.addEventListener('DOMContentLoaded', function () {
  getStorageAndCalculateMain();
});

// -- OnEnter form listeners
attachToInputsOnEnterKeydownFormListener(formMain, calcMainSubmit);

// -- Focusout form listeners
attachOnFocusOutColorOutlineValidation(numberFieldsMain);
attachOnFocusoutDecimalPointValidation();

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
      calcMainSubmit();

    } else if (btnClassName === 'btn-reset') {
      resetMainForm();
      checkmarkAlertGreen();

    } else if (btnClassName === 'btn-save') {
      setLocaleStorageMain();
      checkmarkAlertGreen();
    }
  }

});

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
import { attachToInputsOnEnterKeydownFormListener } from './helpers.js';
import { resetGlobalLocalStorage, resetMainForm } from './reset.js';

import { onScreenScroll, goToScreenTop } from './scroll.js';
import { setGlobalLocalStorage, setLocaleStorageMain } from './storage.js';
import { attachOnFocusOutColorOutlineValidation, attachOnFocusoutDecimalPointValidation, fillMissingDecimalPoints } from './validation.js';
