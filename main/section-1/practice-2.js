'use strict';


module.exports = function collectSameElements(collectionA, collectionB) {
    return collectionA.filter(x => collectionB.join(',').split(',').indexOf(x) !== -1);
}
