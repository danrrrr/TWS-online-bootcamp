'use strict';

module.exports = (collectionA, objectB) => {
    return collectionA.filter(x => objectB['value'].indexOf(x) !== -1);
}
