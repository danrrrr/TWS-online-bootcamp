'use strict';
function one_add_next_multiply_three(collection){
  let arr = [];
  for(let i = 1; i < collection.length; i++){
      arr.push((collection[i-1]+collection[i])*3);
  }
    return arr;
}
module.exports = one_add_next_multiply_three;
