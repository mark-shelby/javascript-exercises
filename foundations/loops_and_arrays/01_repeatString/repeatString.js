const repeatString = function(arr,num) {
    if(num<0) return 'ERROR';
    let str="";
    for(let i=0 ; i<num ; i++){
        str+=arr;
    }
    return str;
};

// Do not edit below this line
module.exports = repeatString;
