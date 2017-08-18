'use strict';

// function find(collection, ch) {
//     for (let item of collection) {
//         if (item.key === ch) {
//             return item;
//         }
//     }

//     return null;
// }

// function summarize(collection) {
//     let result = [];
//     for (let item of collection) {
//         let obj = find(result, item)
//         if (obj) {
//             obj.count++;
//         } else {
//             result.push({key: item, count: 1});
//         }
//     }
//     return result;
// }

// function includes(collection, ch) {
//     for (let item of collection) {
//         if (item === ch) {
//             return true;
//         }
//     }

//     return false;
// }

// function discount(collection, promotionItems) {
//     let result = [];
//     for (let item of collection) {
//         let key = item.key;
//         let count = item.count;
//         if (includes(promotionItems, key)) {
//             count = count - Math.floor(count / 3);
//         }
//         result.push({key, count});
//     }
//     return result;
// }
function getCount(collectionA){
    let result = [];
    collectionA.forEach(x => {
        result[x] = result[x] ? result[x] + 1 : 1;
    });
    return Object.keys(result).map(x => {
        return {key: x, count: result[x]};
    });
}
function getResult(collection, objectB){
    collection.forEach(x => {
        if(objectB.value.indexOf(x.key) !== -1){
            x.count -= Math.floor(x.count / 3);
        }
    });
    return collection;
}
module.exports = function createUpdatedCollection(collectionA, objectB) {
    let count = getCount(collectionA);
    return getResult(count, objectB);
    // let summarized = summarize(collectionA);
    // return discount(summarized, objectB.value);
}
