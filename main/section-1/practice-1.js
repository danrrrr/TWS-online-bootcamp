'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
    return collectionA.filter(x => collectionB.indexOf(x) !== -1);
}
