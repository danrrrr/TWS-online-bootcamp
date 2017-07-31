'use strict';

function choose_common_elements(collection_a, collection_b) {
  let result = [];
  collection_a.forEach(function(ele){
      if(collection_b.indexOf(ele) !== -1){
          result.push(ele);
      }
  });
  return result;
}

module.exports = choose_common_elements;
