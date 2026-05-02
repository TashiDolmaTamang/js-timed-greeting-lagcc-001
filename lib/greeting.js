'use strict';

let isMorning = require('./isMorning');
let isAfternoon = require('./isAfternoon');
let isNight = require('./isNight');

let greeting = function(hour) {
  if (isMorning(hour)) {
    return "Good Morning!";
  } else if (isAfternoon(hour)) {
    return "Good Afternoon!";
  } else if (isNight(hour)) {
    return "Good Night!";
  }
};

module.exports = greeting;
