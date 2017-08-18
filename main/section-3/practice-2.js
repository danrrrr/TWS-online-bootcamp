'use strict';

// function includes(collection, ch) {
//     for (let item of collection) {
//         if (item === ch) {
//             return true;
//         }
//     }

//     return false;
// }

module.exports = function createUpdatedCollection(collectionA, objectB) {
    collectionA.forEach(x => {
        if(objectB.value.indexOf(x.key) !== -1){
            x.count -= Math.floor(x.count / 3);
        }
    });
    console.log(collectionA);
    return collectionA;
    // let result = [];
    // for (let item of collectionA) {
    //     let key = item.key;
    //     let count = item.count;
    //     if (includes(objectB.value, key)) {
    //         count = count - Math.floor(count / 3);
    //     }
    //     result.push({key, count});
    // }
    // return result;
}
