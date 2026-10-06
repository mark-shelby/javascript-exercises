const fibonacci = function(idx) {
const num=Number(idx);
    let a=0;
    let b=1;
    let c=a+b;
    if(num<0) return "OOPS";
    if(num<=1) return num;
    for(let i=2 ; i<num ; i++){
        a=b;
        b=c;
       
        c=a+b;
    }
    return c;
};

// Do not edit below this line
module.exports = fibonacci;
