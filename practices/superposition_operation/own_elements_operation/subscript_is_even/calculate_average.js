'use strict';
    var calculate_average = function(collection){
       let arr = collection.filter((x,index) => index % 2 ===1);
       let sum = 0;
       arr.forEach(x => sum += x);
       return sum/arr.length;
    };
module.exports = calculate_average;
