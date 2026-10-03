const removeFromArray = function(arr, ...num) {
    for(let n of num){
        let idx=arr.indexOf(n);
        while(idx!=-1){
        arr.splice(idx,1);
        idx=arr.indexOf(n)
        }
        
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
