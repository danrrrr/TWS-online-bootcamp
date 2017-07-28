'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
    let arr = {};

  for(let i = 0; i < collectionA.length; i++){
      if(!arr[collectionA[i]]){
          arr[collectionA[i]] = 1;
      }else{
          arr[collectionA[i]]++;
      }
  }
   let collectionC = [];
    for(let key in arr){
        let temp = {};
        temp.key = key;
        temp.count = arr[key];
        collectionC.push(temp);
    }
    for(let j = 0; j < collectionC.length; j++){
        for(let k = 0; k < objectB['value'].length; k++){
            if(collectionC[j].key === objectB['value'][k]){
                let x = parseInt(collectionC[j].count / 3);
                collectionC[j].count -= x;
            }
        }
    }
    return collectionC;
}
