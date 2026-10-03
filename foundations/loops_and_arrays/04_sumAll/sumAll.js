const sumAll = function(a,b) {
    if(!Number.isInteger(a) || !Number.isInteger(b)) return 'ERROR';
    let mini=Math.min(a,b);
    let maxi=Math.max(a,b);
    if(mini<0 || maxi<0) return 'ERROR';
    let sum=0;
    for(let i=mini ; i<=maxi ; i++){
        sum+=i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
