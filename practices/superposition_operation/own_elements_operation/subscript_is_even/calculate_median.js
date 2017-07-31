'use strict';
var calculate_median = function(collection){
    let arr = collection.filter((x, index) => index % 2 === 1);
    return arr.length % 2 === 0 ? (arr[arr.length/2-1]+arr[arr.length/2])/2 : arr[parseInt(arr.length/2)];

};
module.exports = calculate_median;
