export const calculatorsCategory = 'banicaCalculators';

setInitialLocalStorage();

// Local Storage functions
function setInitialLocalStorage() {
  const banicaStorage = localStorage.getItem(calculatorsCategory);

  if (banicaStorage === null) {
    localStorage.setItem(calculatorsCategory, JSON.stringify({}));
  }

}