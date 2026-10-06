const add = function(num1,num2) {
	return num1+num2;
};

const subtract = function(num1,num2) {
	return num1-num2;
};

const sum = function(arr) {
	const total=arr.reduce((acc,num)=>{
    return acc+num;
  },0);
  return total;
};

const multiply = function(arr) {
  const total=arr.reduce((acc,num)=>{
    return acc*num;
  },1);
  return total;
};

const power = function(base,exp) {
	let total=1;
  for(let i=0 ; i<exp ; i++){
    total*=base;
  }
  return total;
};

const factorial = function(num) {
	let total=1;
  for(let i=num ; i>=1 ; i--){
    total*=i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
