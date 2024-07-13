// -- Forms
export const formMain = document.querySelector('#form-main');

// -- Elements - fMain
export const resultElementsArr_fMain = getFormOutputsArray(formMain);
export const resultElementsObj_fMain = getFormOutputsObject(formMain);

// Buttons (Global)
export const btnsGlobal = document.querySelector('.btns-global');
export const btnToTop = document.querySelector('#btn-to-top');
export const btnGlobalReset = document.querySelector('#btn-reset-global ');
export const btnGlobalSave = document.querySelector('#btn-save-global');

// -- Functions
function getFormOutputsArray(formElem) {
  return Array.from(formElem.elements).filter(el => el.tagName === 'OUTPUT');
}

function getFormOutputsObject(formElem) {
  const obj = {};
  const arr = Array.from(formElem.elements).filter(el => el.tagName === 'OUTPUT');
  const x = arr.forEach(el => {
    obj[el.name] = el;
  });

  return obj;
}
