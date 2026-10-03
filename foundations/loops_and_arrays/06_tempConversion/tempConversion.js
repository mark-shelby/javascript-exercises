const convertToCelsius = function(f) {
  let x=((f-32)*(5/9));
  if(!Number.isInteger(x)){
    x=x.toFixed(1);
  }
  x=Number(x);
  return x;
};

const convertToFahrenheit = function(c) {
  let x=((c*(9/5) + 32));
  if(!Number.isInteger(x)){
    x=x.toFixed(1);
  }
  x=Number(x);
  return x;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
