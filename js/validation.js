// ##### Validation functions #####

// On Focus Out
export function attachOnFocusOutColorOutlineValidation(numberFieldsCollection) {
  numberFieldsCollection.forEach((field) => {
    field.addEventListener('focusout', (e) => {
      const min = e.target.min;
      const max = e.target.max;
      const isRequired = e.target.required;

      onFocusOutColorOutline(e.target, min, max, isRequired);
    });
  });
}

function onFocusOutColorOutline(field, min, max, isRequired) {
  let textOutput = '';
  const inputValue = Number(field.value);
  min = Number(min);
  max = Number(max);

  if (max === 0) {
    max = Number.MAX_SAFE_INTEGER;
  }

  if (field.value === '') {
    if (isRequired) {
      field.style.outline = '2px solid green';
      textOutput = 'empty required field';
    } else {
      field.style.outline = 'none';
      textOutput = 'ok';
    }

  } else if (inputValue < min || inputValue > max) {
    field.style.outline = '2px solid red';
    textOutput = 'out of range required field';
  } else {
    field.style.outline = 'none';
    textOutput = 'ok';
  }

  return [textOutput, field];
}

export function attachOnFocusoutDecimalPointValidation() {
  decimalOneDigitInputs.forEach(el => {
    el.addEventListener('focusout', () => validationForDecimalPoint(el));
  });
}

export function fillMissingDecimalPoints() {
  decimalOneDigitInputs.forEach(el => validationForDecimalPoint(el));
}

function validationForDecimalPoint(numField) {
  const numValue = numField.value;

  if (numValue !== '' && numValue.includes('.') === false) {
    numField.value = numValue + '.0';
  }
}

// On Empty Field
export function hasEmptyFieldValidation(fieldsCollection) {
  for (const field of fieldsCollection) {
    const isRequired = field.required;

    if (isRequired === false) {
      continue
    }

    const val = field.value;

    if (val === '') {
      setTimeout(() => {
        field.style.outline = '2px solid green';
        field.focus();
      }, 0);

      return [true, field];
    }
  }

  return [false];
}

// On Out Of Range
export function valueRangeCheck(field, min, max) {
  const inputValue = Number(field.value);
  min = Number(min);
  max = Number(max);

  if (max === 0) {
    max = Number.MAX_SAFE_INTEGER;
  }

  if (inputValue < min || inputValue > max) {
    setTimeout(() => {
      field.style.outline = '2px solid red';
    }, 0);

    alertOutOfRangeBox.msgText2 = `[ ${min} - ${max} ]`;
    alertOutOfRangeBox
      .open()
      .then((val) => {
        field.focus();
      })
      .catch((val) => { });

    return false;

  } else {
    field.style.outline = 'none';
    return true;
  }
}

export function hasOutOfRangeFieldValidation(fieldsCollection) {
  for (const field of fieldsCollection) {
    const min = field.min;
    const max = field.max;

    if (valueRangeCheck(field, min, max)) {
      continue;
    } else {
      return [true, field];
    }
  }

  return [false];
}

import { alertOutOfRangeBox } from './alerts.js';
import { decimalOneDigitInputs } from './elements.js';
// IMPORTS
import { ConfirmModal } from './modalClass.js';
