// ##### Elements [Start] #####
export const versionElem = document.querySelector('#version');

// -- Forms
export const formMain = document.querySelector('#form-main');

// -- Elements - fMain
export const resultElementsArr_fMain = getFormOutputsArray(formMain);
export const resultElementsObj_fMain = getFormOutputsObject(formMain);

// Buttons
export const btnPredefinedValues = document.querySelector('.btn-predefined-values');

// Buttons (Global)
export const btnsGlobal = document.querySelector('.btns-global');
export const btnToTop = document.querySelector('#btn-to-top');
export const btnToTopContainer = btnToTop.parentElement;
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

// Constant objects
export const predefinedData_fMain = {
  "crustsCount": "5",
  "crustWeight": "150",
  "hydrationPercent": "55",
  "saltPercent": "2.5",
  "vinegarPercent": "0.0",
  "oilPercent": "0.0"
};


// ##### Elements [End] #####
