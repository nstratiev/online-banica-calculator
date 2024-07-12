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

  // const dataObj = getInputsDataObj(formElem);
  const dataObj = getFormDataToObject(formElem);
  return dataObj;
}

// -- Form disable
export function inactivateAllFormsAndLinks(bool, [linkElems, inactivateFunc]) {
  const allFieldsets = document.querySelectorAll('fieldset');
  const allLinks = document.querySelectorAll('a');
  const inactivateLink = (ev) => ev.preventDefault();

  if (bool) {
    allFieldsets.forEach(el => el.disabled = true);
    allLinks.forEach(el => el.addEventListener('click', inactivateLink));
    return [allLinks, inactivateLink];

  } else {
    allFieldsets.forEach(el => el.disabled = false);
    linkElems.forEach(el => el.removeEventListener('click', inactivateFunc));
  }

}

function disableForm(formElem) {
  toggleEnableDisableFormInputs_js(formElem, true);
}

function enableForm(formElem) {
  toggleEnableDisableFormInputs_js(formElem, false);
}

function toggleEnableDisableFormInputs_js(formElem, bool) {
  for (const el of formElem.elements) {
    el.disabled = bool;
  }
}

function toggleEnableDisableFormInputs_fieldset(fieldsetElem, bool) {
  fieldsetElem.disabled = bool;
}


import { validationEmptyFields, validationOutOfRangeFields } from './validation.js';