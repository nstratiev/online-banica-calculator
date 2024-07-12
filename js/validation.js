export function validationOutOfRangeFields(formFieldsArr, pageLoadingObj, resetFormResultsFunc) {
  for (const item of formFieldsArr) {
    if (item.type !== 'number') {
      continue;
    }

    const num = Number(item.value);
    const minLimit = Number(item.min);
    let maxLimit = Number(item.max);

    if (maxLimit === 0) {
      maxLimit = Number.MAX_SAFE_INTEGER;
    }

    if (num < minLimit || num > maxLimit) {
      if (pageLoadingObj.isFirstPageLoad !== true) {
        resetFormResultsFunc();

        const configArr = inactivateAllFormsAndLinks(true, []);

        alertOutOfRangeBox.msgText2 = `[ ${minLimit} - ${maxLimit} ]`;
        alertOutOfRangeBox.open()
          .then((msg) => { })
          .catch((err) => console.log(err))
          .finally(() => {
            inactivateAllFormsAndLinks(false, configArr);
            item.focus();
          });
      }

      return false;
    }
  }

  return true;
}

export function validationEmptyFields(formFieldsArr, pageLoadingObj, resetFormResultsFunc) {
  for (const item of formFieldsArr) {
    if (item.tagName !== 'INPUT' || item.required === false) {
      continue;
    }

    if (item.value === '') {
      if (pageLoadingObj.isFirstPageLoad !== true) {
        resetFormResultsFunc();

        const configArr = inactivateAllFormsAndLinks(true, []);

        alertEmptyFieldBox.open()
          .then((msg) => { })
          .catch((err) => console.log(err))
          .finally(() => {
            inactivateAllFormsAndLinks(false, configArr);
            item.focus();
          });
      }

      return false;
    }
  }

  return true;
}

// Decimal point inputs validation
export function attachOnFocusoutDecimalPointValidation() {
  document.querySelectorAll('input[step="0.1"]').forEach(el => {
    el.addEventListener('focusout', (ev) => validationForDecimalPoint(ev, el));
    el.addEventListener('keydown', (ev) => {
      if (ev.code === 'Enter') {
        validationForDecimalPoint(ev, el);
      }
    });
  });
}

function validationForDecimalPoint(ev, numField) {
  const numValue = numField.value;

  if (numValue !== '' && numValue.includes('.') === false) {
    numField.value = numValue + '.0';
  }
}

import { alertEmptyFieldBox, alertOutOfRangeBox } from './alerts.js';
import { inactivateAllFormsAndLinks } from './generic.js';
