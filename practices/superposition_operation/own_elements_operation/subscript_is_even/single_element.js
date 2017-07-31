'use strict';
var single_element = function(collection){
    let single = collection.filter((ele, index) => index % 2 === 1);
    let repeat = single.filter((ele, index) => single.indexOf(ele) !== index);
    let set1 = new Set(single);
    let set2 = new Set(repeat);
    set2.forEach(ele => set1.delete(ele));
    return [...set1];
};
module.exports = single_element;
