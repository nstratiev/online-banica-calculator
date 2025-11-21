// ##### Scroll [Start] #####
export function onScreenScroll() {
  if (
    document.body.scrollTop > 120 ||
    document.documentElement.scrollTop > 120
  ) {
    btnToTopContainer.style.display = 'block';
  } else {
    btnToTopContainer.style.display = 'none';
  }
}

export function goToScreenTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;

  const path = `${window.location.pathname}` || '';
  const newURL = window.location.protocol + "//" + window.location.host + path;
  history.replaceState(null, "", newURL);
}


import { btnToTopContainer } from './elements.js';

// ##### Scroll [End] #####
