'use strict';

let isAfternoon = function(hour) {
  return hour >= 12 && hour <= 19;
};

module.exports = isAfternoon;
