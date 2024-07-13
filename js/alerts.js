export function checkmarkAlertGreen(bool) {
  if (bool) {
    temporaryOnClickAlert('&check;', 400, 'green');
    // setTimeout(() => showModal(ev), 200);
  }
}

function temporaryOnClickAlert(msg, duration, bgColor) {
  const containerEl = document.createElement('div');
  containerEl.setAttribute('class', 'temp-alert');
  containerEl.style.backgroundColor = bgColor;
  containerEl.style.outline = `2px solid ${bgColor}`;

  const spanEl = document.createElement('span');
  spanEl.setAttribute('class', 'check-mark');
  spanEl.innerHTML = msg;
  containerEl.appendChild(spanEl);
  setTimeout(function () {
    containerEl.parentNode.removeChild(containerEl);
  }, duration);
  document.body.appendChild(containerEl);
}

export const globalResetConfirmDialog = new ConfirmModal({
  titleText: '',
  msgText:
    'Желаете ли всички запаметени стойности, свързани с настоящата страница, да бъдат изтрити трайно от паметта?',
  confirmText: 'Да',
  cancelText: 'Не',
});

export const alertEmptyFieldBox = new ConfirmModal({
  titleText: '',
  msgText: 'Моля, попълнете всички задължителни полета ...',
  confirmText: 'OK',
  cancelText: '',
  msgText2: ''
});

export const alertOutOfRangeBox = new ConfirmModal({
  titleText: '',
  msgText: `Моля, въведете стойност в диапазона: `,
  confirmText: 'OK',
  cancelText: '',
  msgText2: '',
});

// IMPORTS
import { ConfirmModal } from './modalClass.js';
