'use strict';
var number_map_to_word = function(collection){
    const latins = "zabcdefghijklmnopqrstuvwxy".split("");
    return collection.map(x => latins[x % 26]);
   
};

module.exports = number_map_to_word;
