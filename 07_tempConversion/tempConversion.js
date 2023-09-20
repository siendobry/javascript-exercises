const convertToCelsius = function(fahrenheitDegrees) {
  return Math.round((fahrenheitDegrees - 32) * (50 / 9)) / 10
};

const convertToFahrenheit = function(celsiusDegrees) {
  return Math.round(((celsiusDegrees * (90 / 5)) + 320)) / 10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
