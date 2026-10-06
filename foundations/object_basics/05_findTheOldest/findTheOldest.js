const findTheOldest = function(arr) {
    let obj={};
    let maxi=0;
    for(let i=0 ; i<arr.length ; i++){
        let age=0;
        if(!arr[i].yearOfDeath) age=2026-arr[i].yearOfBirth;
        else age=arr[i].yearOfDeath-arr[i].yearOfBirth;
        if(age>maxi){
            obj=arr[i];
            maxi=age;
        }
    }
    return obj;
};

// Do not edit below this line
module.exports = findTheOldest;
