export function printCurrentVersion(versionElem) {
  printCalculatorVersion(versionElem, '0.9');
}

function printCalculatorVersion(versionElem, calculatorVersion) {
  versionElem.textContent = calculatorVersion;
}
