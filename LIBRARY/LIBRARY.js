// Get data
function getInputsDataObj(formElem) {
  const formInputsCollection = formElem.querySelectorAll('input');

  const dataObj = {};

  for (const field of formInputsCollection) {
    if (field.type === 'text') {
      dataObj[field.name] = field.value;

    } else if (field.type === 'number') {
      if (field.value === '') {
        dataObj[field.name] = field.value;
      } else {
        dataObj[field.name] = Number(field.value);
      }
    }

  }

  return dataObj;
}

// Decimal point inputs validation
export function attachOnFocusoutDecimalPointValidation() {
  document.querySelectorAll('input[step="0.1"]').forEach(el => {
    el.addEventListener('focusout', () => validationForDecimalPoint(el));
  });
}

function validationForDecimalPoint(numField) {
  const numValue = numField.value;

  if (numValue !== '' && numValue.includes('.') === false) {
    numField.value = numValue + '.0';
  }
}

/* export function fillMissingDecimalPoints() {
  decimalOneDigitInputs.forEach(el => validationForDecimalPoint(el));
}
 */

// INDEX.js
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
