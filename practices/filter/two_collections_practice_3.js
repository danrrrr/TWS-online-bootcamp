'use strict';

function choose_divisible_integer(collection_a, collection_b) {
  let result = [];
  for(let a of collection_a){
      for(let b of collection_b) {
          if(a % b === 0){
              result.push(a);
              break;
          }
      }
  }
  return result;
}

module.exports = choose_divisible_integer;
