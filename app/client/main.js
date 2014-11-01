var moment = require('moment');
require('moment-countdown');

var elements = [
  document.querySelector('.months'),
  document.querySelector('.days'),
  document.querySelector('.hours'),
  document.querySelector('.minutes'),
  document.querySelector('.seconds')
];

var RELEASE_DATE    = '2014-10-31 23:59:59';
var UPDATE_INTERVAL = 1000;

// Update countdown at specified interval
var updateCountdownInterval = setInterval(function() {
  updateCountdown();
}, UPDATE_INTERVAL);

function updateCountdown() {
  var countdown = moment(RELEASE_DATE).countdown();

  // Release album
  if (countdown.months === 0 &&
    countdown.days === 0 &&
    countdown.hours === 0 &&
    countdown.minutes === 0 &&
    countdown.seconds === 0) {
    releaseAlbum();

    clearInterval(updateCountdownInterval);
  }

  elements.forEach(function(el) {
    var unit    = el.getAttribute('data-unit');
    var value   = countdown[unit];
    var unitEl  = el.querySelector('.unit');
    var valueEl = el.querySelector('.value');

    // Singularize
    if (value === 1) {
      unit = unit.slice(0, -1);
    }

    // Don't display 0 days
    if (value === 0 && unit === 'days') {
      valueEl.textContent = '';
      unitEl.textContent  = '';

      return;
    }

    // Don't display 0 months
    if (value === 0 && unit === 'months') {
      valueEl.textContent = '';
      unitEl.textContent  = '';

      return;
    }

    valueEl.textContent = value;
    unitEl.textContent  = unit;
  });
}

function releaseAlbum() {
  var mainEl      = document.querySelector('.main');
  var countdownEl = document.querySelector('.countdown');
  var teaserEl    = document.querySelector('.teaser');
  var playerEl    = document.querySelector('.bandcamp-player');

  countdownEl.classList.add('fade');
  teaserEl.classList.add('fade');

  setTimeout(function() {
    mainEl.classList.add('released');
    playerEl.classList.remove('absolute');
    teaserEl.classList.add('hide');
    playerEl.classList.remove('hide');

    setTimeout(function() {
      playerEl.classList.add('in');
    }, 500);
  }, 3000);

}

updateCountdown();
