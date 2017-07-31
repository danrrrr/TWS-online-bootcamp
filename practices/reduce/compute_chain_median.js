'use strict';

function compute_chain_median(collection) {
  let arr = collection.split('->').map(x => parseInt(x)).sort((a, b) => a - b);
  return arr.length % 2 === 0 ? (arr[arr.length/2 - 1] + arr[arr.length/2]) / 2 : arr[parseInt(arr.length/2)];
}

module.exports = compute_chain_median;
