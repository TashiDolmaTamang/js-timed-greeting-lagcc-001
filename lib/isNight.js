'use strict';

let isNight = function(hour) {
  return (hour >= 20 && hour <= 23) || (hour >= 0 && hour <= 5);
};

module.exports = isNight;
