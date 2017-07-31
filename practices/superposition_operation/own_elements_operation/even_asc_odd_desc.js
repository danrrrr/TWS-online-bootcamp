'use strict';
var even_asc_odd_desc = function(collection){
    let arr1 = collection.filter(x => x % 2 === 0).sort((a, b) => a - b);
    let arr2 = collection.filter(x => x % 2 === 1).sort((a, b) => b - a);
    let arr3 = arr1.concat(arr2);
    return arr3;
};
module.exports = even_asc_odd_desc;
