// ##### Math [Start] #####
export function calculate_fMain(data) {
  const proteinsMinAmount = data.proteinsMinAmount;
  const proteinsMaxAmount = data.proteinsMaxAmount;
  const finalFlourWeight = data.finalFlourWeight;
  const desiredProteinsAmount = data.desiredProteinsAmount;

  let flourMinProteinsWeight = getFlourMinProteinsWeight(proteinsMinAmount, proteinsMaxAmount, finalFlourWeight, desiredProteinsAmount);
  let flourMaxProteinsWeight = getFlourMaxProteinsWeight(flourMinProteinsWeight, finalFlourWeight);

  // Validation
  if (flourMinProteinsWeight < 0 || flourMaxProteinsWeight < 0) {

    const configArr = inactivateAllFormsAndLinks(true, []);

    alertOutOfRangeBox.msgText2 = `[ ${proteinsMinAmount} - ${proteinsMaxAmount} ]`;
    alertOutOfRangeBox.open()
      .then((msg) => { })
      .catch((err) => console.log(err))
      .finally(() => {
        inactivateAllFormsAndLinks(false, configArr);
        desiredProteinsAmountElem.focus();
      });

    flourMinProteinsWeight = '....';
    flourMaxProteinsWeight = '....';
  }

  const realProteinsAmount = proteinsCheck(flourMinProteinsWeight, flourMaxProteinsWeight, proteinsMinAmount, proteinsMaxAmount, finalFlourWeight, finalFlourWeight);

  let finalNotes = '....';

  if (flourMinProteinsWeight >= 0 && flourMaxProteinsWeight >= 0) {
    finalNotes = getFinalNotes(flourMinProteinsWeight, flourMaxProteinsWeight, realProteinsAmount);
  }

  return { flourMinProteinsWeight, flourMaxProteinsWeight, finalNotes };
}


function getFlourMinProteinsWeight(proteinsMinAmount, proteinsMaxAmount, finalFlourWeight, desiredProteinsAmount) {
  proteinsMinAmount = Number(proteinsMinAmount);
  proteinsMaxAmount = Number(proteinsMaxAmount);
  finalFlourWeight = Number(finalFlourWeight);
  desiredProteinsAmount = Number(desiredProteinsAmount);

  return finalFlourWeight * ((desiredProteinsAmount - proteinsMaxAmount) / (proteinsMinAmount - proteinsMaxAmount));
}

function getFlourMaxProteinsWeight(flourMinProteinsWeight, finalFlourWeight) {
  return finalFlourWeight - flourMinProteinsWeight;
}

function proteinsCheck(flourMinProteinsWeight, flourMaxProteinsWeight, proteinsMinAmount, proteinsMaxAmount, finalFlourWeight) {
  const proteinsAmount_1 = flourMinProteinsWeight * (proteinsMinAmount / 100);
  const proteinsAmount_2 = flourMaxProteinsWeight * (proteinsMaxAmount / 100);
  return (proteinsAmount_1 + proteinsAmount_2) / finalFlourWeight * 100;
}

function getFinalNotes(flourMinProteinsWeight, flourMaxProteinsWeight, realProteinsAmount) {
  const newLine = "<br>";

  return `${flourMinProteinsWeight + flourMaxProteinsWeight} g брашно с` + newLine + `${realProteinsAmount.toFixed(1)} (g или %)` + newLine + `протеини`;
}

// IMPORTS
import { alertOutOfRangeBox } from './alerts.js';
import { desiredProteinsAmountElem } from './elements.js';
import { inactivateAllFormsAndLinks } from './generic.js';

// ##### Math [End] #####
