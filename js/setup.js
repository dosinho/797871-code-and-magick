'use strict';

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYE_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});


var generateData = function (value) {
  var data = value[Math.floor(Math.random() * value.length)];
  return data;
};

var setupCoat = document.querySelector('.setup-wizard-appearance .wizard-coat');
var inputs = document.querySelector('.setup-wizard-appearance');
var inputCoat = inputs.querySelector('input');

setupCoat.addEventListener('click', function () {
  setupCoat.style.fill = generateData(COAT_COLORS);
  inputCoat.setAttribute('value', setupCoat.style.fill);
});

var inputEye = inputs.querySelector('input:last-child');
var setupEye = document.querySelector('.setup-wizard .wizard-eyes');
setupEye.addEventListener('click', function () {
  setupEye.style.fill = generateData(EYE_COLORS);
  inputEye.setAttribute('value', setupEye.style.fill);
});

var setupFireball = document.querySelector('.setup-fireball-wrap');
var inputFireball = setupFireball.querySelector('input');
setupFireball.addEventListener('click', function () {
  setupFireball.style.background = generateData(FIREBALL_COLOR);
  if (setupFireball.style.background === 'rgb(48, 168, 238)') {
    inputFireball.setAttribute('value', '#30a8ee');
  } else if (setupFireball.style.background === 'rgb(238, 72, 48)') {
    inputFireball.setAttribute('value', '#ee4830');
  } else if (setupFireball.style.background === 'rgb(92, 230, 192)') {
    inputFireball.setAttribute('value', '#5ce6c0');
  } else if (setupFireball.style.background === 'rgb(232, 72, 213)') {
    inputFireball.setAttribute('value', '#e848d5');
  } else if (setupFireball.style.background === 'rgb(230, 232, 72)') {
    inputFireball.setAttribute('value', '#e6e848');
  }
});
