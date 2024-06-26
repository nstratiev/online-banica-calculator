// ##### Print functions #####
export function printResult(
  value,
  resultElem,
  toFixedIndex,
  additionalTextObj
) {
  // additionalTextObj = {prefix: '', postfix: ''};
  let result;

  if (value) {
    if (additionalTextObj) {
      result = `${additionalTextObj.prefix}${value.toFixed(toFixedIndex)}${additionalTextObj.postfix
        }`;
    } else {
      result = `${value.toFixed(toFixedIndex)}`;
    }
  } else {
    result = '';
  }

  resultElem.style.fontWeight = 'bold';
  resultElem.textContent = result;
}
