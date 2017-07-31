'use strict';
    var calculate_average = function(collection){
       let arr = collection.filter((x,index) => index % 2 ===1);
       return arr.reduce((sum, current) => sum + current, 0) / arr.length;
    };
module.exports = calculate_average;
