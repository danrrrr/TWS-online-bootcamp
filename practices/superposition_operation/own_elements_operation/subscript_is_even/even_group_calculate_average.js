'use strict';
var even_group_calculate_average = function(collection){
    let select = collection.filter((ele, index) => ele % 2 === 0 && (index+1) % 2 ===0);
    let arr1 = [], arr2 = [], arr3 = [];
    select.forEach(function(element) {
        if(element.toString().length === 1) arr1.push(element); 
        if(element.toString().length === 2) arr2.push(element);
        if(element.toString().length === 3) arr3.push(element);
    });
    if(select.length === 0){
        return [0];
    }
    if(arr1.length === 0 && arr2.length === 0){
        return [getAverage(select)];
    }
    return [getAverage(arr1), getAverage(arr2), getAverage(arr3)];
};
let getAverage = arr => {
      return arr.reduce((sum, current) => sum + current, 0) / arr.length;
    }
module.exports = even_group_calculate_average;
