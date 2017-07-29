'use strict';

function collect_all_even(collection) {
    let arr = [];
    return arr = collection.filter(ele => ele%2 === 0);
}

module.exports = collect_all_even;
