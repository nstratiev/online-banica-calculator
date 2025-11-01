// ##### Index [Start] #####
// On first page load
document.addEventListener('DOMContentLoaded', (ev) => {
  printCurrentVersion(versionElem);
  console.log(versionElem);

  populateLocaleStorageData([formMain]);
  onSubmit_initialLoad(ev);

});

// -- Button-to-top listeners
window.addEventListener('scroll', onScreenScroll);
btnToTop.addEventListener('click', goToScreenTop);

// -- Button predefined values
btnPredefinedValues.addEventListener('click', populatePredefinedValues_fMain);

// -- Buttons - global
btnGlobalReset.addEventListener('click', onGlobalReset);
btnGlobalSave.addEventListener('click', onGlobalSave);

// Listeners
attachFocusoutValidation();
attachOnFocusoutDecimalPointValidation();

// -- Buttons listeners
document.addEventListener('click', (ev) => {
  if (ev.target.tagName !== 'BUTTON') {
    return;
  }

  const btnsGroupClassName = ev.target.parentElement.className;
  const btnClassName = ev.target.className;

  if (btnsGroupClassName.includes('-main')) {
    // console.log('MAIN');
    if (btnClassName === 'btn-submit') {
      onSubmit_fMain(ev);

    } else if (btnClassName === 'btn-reset') {
      onReset_fMain(true);

    } else if (btnClassName === 'btn-save') {
      onSave_fMain(ev);
    }
  }

});


import { btnGlobalReset, btnGlobalSave, btnPredefinedValues, btnToTop, formMain, versionElem } from './elements.js';
import { onGlobalSave, onSave_fMain, onSubmit_fMain, onSubmit_initialLoad, populatePredefinedValues_fMain } from './event-handlers.js';
import { attachFocusoutValidation } from './focusout.js';
import { populateLocaleStorageData } from './storage.js';
import { onGlobalReset, onReset_fMain } from './reset.js';
import { goToScreenTop, onScreenScroll } from "./scroll.js";
import { attachOnFocusoutDecimalPointValidation } from './validation.js';
import { printCurrentVersion } from '../../global/js/version.js';

// ##### Index [End] #####
