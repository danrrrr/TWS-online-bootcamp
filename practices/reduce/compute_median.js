'use strict';

function compute_median(collection) {
   let arr = collection.map(x => parseInt(x)).sort((a, b) => a - b);
   return arr.length % 2 === 0 ? (arr[arr.length/2 - 1] + arr[arr.length/2]) / 2 : arr[parseInt(arr.length/2)];
}

module.exports = compute_median;


