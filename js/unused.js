// Unused functions REPO
export function preventDefaultOnEnterKeyPress(element) {
  element.addEventListener('keydown', function (e) {
    if (e.keyCode === 13) {
      e.preventDefault();
    }
  });
}

function getLeavenComponents(
  totalFlour,
  prefermentedFlourPercent,
  leavenHydratationPercent
) {
  const obj = {};
  obj.leavenFlour = totalFlour * prefermentedFlourPercent;
  obj.leavenWater = obj.leavenFlour * leavenHydratationPercent;
  obj.leavenTotal = obj.leavenFlour + obj.leavenWater;

  // const obj = {leavenTotal: '', leavenFlour: '', leavenWater: ''};
  return obj;
}

function setIngredientsForKneadingObj(
  totalFlour,
  totalWater,
  totalSalt,
  leavenFlour,
  leavenWater
) {
  const obj = {};
  obj.flour = totalFlour - leavenFlour;
  obj.water = totalWater - leavenWater;
  obj.salt = totalSalt;

  // const obj = { flour: '', water: '', salt: '' };
  return obj;
}
