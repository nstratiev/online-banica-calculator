// ##### Storage [Start] #####
export function setLocalStorage(obj, formName) {
  const jsonData = JSON.stringify(obj);
  localStorage.setItem(formName, jsonData);
}

export function getLocalStorage(formName) {
  const obj = JSON.parse(localStorage.getItem(formName));
  return obj;
}

export function clearLocalStorageGlobal() {
  localStorage.clear();
}

export function populateLocaleStorageData(formsArr) {
  for (const formElem of formsArr) {
    const localStorageObj = getLocalStorage(formElem.name);

    if (localStorageObj === null) {
      console.info('No localStorage for this form ...');
      return null;
    }

    for (const key in localStorageObj) {
      const target = formElem[key];
      // const target = formElem.querySelector(`input[name=${key}]`);
      target.value = localStorageObj[key];
    }

  }

}

// ##### Storage [End] #####
