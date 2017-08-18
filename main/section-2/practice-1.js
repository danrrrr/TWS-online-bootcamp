'use strict';

module.exports = function countSameElements(collection) {
    let result = [];
    collection.forEach(x => {
        result[x] = result[x] ? result[x] + 1 : 1;
    });
    return Object.keys(result).map(x => {
        return {key: x, count: result[x]};
    });
}
