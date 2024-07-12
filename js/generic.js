export function getFormDataToObject(formElem) {
  return Object.fromEntries(new FormData(formElem));
}

export function getData(formElem, pageLoadingObj, resetFormResultsFunc) {
  if (validationEmptyFields(formElem.elements, pageLoadingObj, resetFormResultsFunc) === false) {
    return false;
  }

  if (validationOutOfRangeFields(formElem.elements, pageLoadingObj, resetFormResultsFunc) === false) {
    return false;
  }

  const dataObj = getFormDataToObject(formElem);
  return dataObj;
}

// -- Form disable
export function inactivateAllFormsAndLinks(bool, [linkElems, inactivateFunc]) {
  const allFieldsets = document.querySelectorAll('fieldset');
  const allLinks = document.querySelectorAll('a');
  const inactivateLink = (ev) => ev.preventDefault();

  if (bool) {
    btnsGlobal.style.pointerEvents = 'none';
    allFieldsets.forEach(el => el.disabled = true);
    allLinks.forEach(el => el.addEventListener('click', inactivateLink));
    return [allLinks, inactivateLink];

  } else {
    btnsGlobal.style.pointerEvents = 'initial';
    allFieldsets.forEach(el => el.disabled = false);
    linkElems.forEach(el => el.removeEventListener('click', inactivateFunc));
  }

}


import { btnsGlobal } from './elements.js';
import { validationEmptyFields, validationOutOfRangeFields } from './validation.js';