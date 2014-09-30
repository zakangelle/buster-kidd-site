var moment = require('moment');
require('moment-countdown');

var elements = [
  document.querySelector('.months'),
  document.querySelector('.days'),
  document.querySelector('.hours'),
  document.querySelector('.minutes'),
  document.querySelector('.seconds')
];

function updateCountdown() {

  // Halloween night dawg
  var countdown = moment('2014-10-31').countdown();

  elements.forEach(function(el) {
    var unit  = el.getAttribute('data-countdown');
    var value = countdown[unit];

    // Singular
    if (value === 1) {
      unit = unit.slice(0, -1); 
    }

    // Only show if not zero
    if (value !== 0) {
      el.innerHTML = value + ' ' + unit;
    }
  });
}

updateCountdown();

// Update every second
setInterval(function() {
  updateCountdown();
}, 1000);
