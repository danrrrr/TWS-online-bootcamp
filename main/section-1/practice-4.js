'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
    return collectionA.filter(x => objectB.value.indexOf(x.key) !== -1).map(x => x.key);
}
