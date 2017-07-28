'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
    for(let i = 0; i < collectionA.length; i++){
      for(let j = 0; j < objectB['value'].length; j++){
          if(collectionA[i].key === objectB['value'][j]){
                let x = parseInt(collectionA[i].count / 3);
                collectionA[i].count -= x;
          }
      }
  }
  return collectionA;
}
