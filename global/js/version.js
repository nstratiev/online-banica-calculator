export function printCurrentVersion(versionElem) {
  printCalculatorVersion(versionElem, '1.1.2');
}

function printCalculatorVersion(versionElem, calculatorVersion) {
  versionElem.textContent = calculatorVersion;
}
