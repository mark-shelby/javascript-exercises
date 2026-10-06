const palindromes = function (str) {
    let arr = str.toLowerCase().split(/[ ,.!]+/);
    let strFinal=arr.join('');
    for(let i=0 ; i<strFinal.length ; i++){
        if(strFinal[i]!=strFinal[strFinal.length-i-1]) return false;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
