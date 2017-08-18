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

// function split(item) {
//     let array = item.split("-");
//     return {key: array[0], count: parseInt(array[1], 10)};
// }

// function push(result, key, count) {
//     for (var i = 0; i < count; i++) {
//         result.push(key);
//     }
// }

// function expand(collection) {
//     let result = [];
//     for (let item of collection) {
//         if (item.length === 1) {
//             result.push(item);
//         } else {
//             let {key, count} = split(item);
//             push(result, key, count);
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
function getCount(collection){
    let result = new Map();
    const pattern = /(\w{1})-?(\d*)/
    collection.forEach(x => {
        let [, key, value] = x.match(pattern);
        value = value === '' ? 1 : parseInt(value);
        value = result.has(key) ? result.get(key) + value : value;
        result.set(key, value);
    });
    let resultArr = [];
    result.forEach((value, key) => resultArr.push({key:key,count:value}));
    return resultArr;
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
    // let expandedArray = expand(collectionA);
    // let summarizedArray = summarize(expandedArray);
    // return discount(summarizedArray, objectB.value);
}
