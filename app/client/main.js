var moment = require('moment');
require('moment-countdown');

var elements = [
  document.querySelector('.months'),
  document.querySelector('.days'),
  document.querySelector('.hours'),
  document.querySelector('.minutes'),
  document.querySelector('.seconds')
];

var ONE_SECOND = 1000;

function updateCountdown() {

  // Halloween night dawg
  var countdown = moment('2014-10-31').countdown();

  elements.forEach(function(el) {
    var unit  = el.getAttribute('data-unit');
    var value = countdown[unit];

    // Singularize
    if (value === 1) {
      unit = unit.slice(0, -1);
    }

    // Don't display 0 months
    if (value === 0 && unit === 'month') {
      el.querySelector('.value').textContent = '';
      el.querySelector('.unit').textContent  = '';

      return;
    }

    el.querySelector('.value').textContent = value;
    el.querySelector('.unit').textContent  = unit;
  });
}

updateCountdown();

// Update every second
setInterval(function() {
  updateCountdown();
}, ONE_SECOND);
