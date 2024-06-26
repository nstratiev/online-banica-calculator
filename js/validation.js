// ##### Validation functions #####

// On Focus Out
export function attachOnFocusoutDecimalPointValidation() {
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
}

export function attachOnFocusOutInputsListener(numberFields) {
  numberFields.forEach((field) => {
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

// On Empty Field
export function hasEmptyFieldsValidation(fieldsCollection) {
  for (const field of fieldsCollection) {
    const isRequired = field.required;

    if (isRequired === false) {
      continue
    }

    const val = field.value;

    if (val === '') {
      setTimeout(() => {
        field.focus();
        field.style.outline = '2px solid green';
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
    const alertOutOfRangeBox = new ConfirmModal({
      titleText: '',
      msgText: `Моля, въведете стойност в диапазона:`,
      confirmText: 'OK',
      cancelText: '',
      msgText2: `[ ${min} - ${max} ]`,
    });

    setTimeout(() => {
      field.style.outline = '2px solid red';
    }, 0);

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

export function hasOutOfRangeFieldsValidation(fields) {
  for (const field of fields) {
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

// IMPORTS
import { ConfirmModal } from './modalClass.js';
