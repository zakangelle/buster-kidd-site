var moment = require('moment');
require('moment-countdown');

var elements = [
  document.querySelector('.months'),
  document.querySelector('.days'),
  document.querySelector('.hours'),
  document.querySelector('.minutes'),
  document.querySelector('.seconds')
];

var RELEASE_DATE    = '2014-11-01';
var UPDATE_INTERVAL = 1000;

function updateCountdown() {
  var countdown = moment(RELEASE_DATE).countdown();

  elements.forEach(function(el) {
    var unit    = el.getAttribute('data-unit');
    var value   = countdown[unit];
    var unitEl  = el.querySelector('.unit');
    var valueEl = el.querySelector('.value');

    // Singularize
    if (value === 1) {
      unit = unit.slice(0, -1);
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

updateCountdown();

// Update every second
setInterval(function() {
  updateCountdown();
}, UPDATE_INTERVAL);
