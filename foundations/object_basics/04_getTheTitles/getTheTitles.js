const getTheTitles = function(arr) {
    let finalArr=[];
    for(let i=0 ; i<arr.length ; i++){
        finalArr.push(arr[i].title);
    }
    return finalArr;
};

// Do not edit below this line
module.exports = getTheTitles;
