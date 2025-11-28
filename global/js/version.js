const appVersion = 'Версия: 1.1.4';
const appEnvironmentType = '';

export function printCurrentAppVersion(versionElem) {
  const fragment = new DocumentFragment();

  fragment.textContent = appVersion;

  const spanElem = document.createElement('span');
  spanElem.textContent = appEnvironmentType;
  fragment.appendChild(spanElem);

  // versionElem.innerHTML = '';
  versionElem.appendChild(fragment);
}
