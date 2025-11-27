const appVersion = 'Версия: 1.1.3';
const appEnvironmentType = '';

export function printCurrentAppVersion(versionElem) {
  versionElem.textContent = appVersion;

  const spanElem = document.createElement('span');
  spanElem.textContent = appEnvironmentType;
  versionElem.appendChild(spanElem);
}
