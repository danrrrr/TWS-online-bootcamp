'use strict';
var number_map_to_word_over_26 = function(collection){
   const latins = "zabcdefghijklmnopqrstuvwxy".split("");
   const nextLetter = (a) => a/26 <= 1 ? latins[a%26] : nextLetter(parseInt(a/26)) + latins[a%26];
   return collection.map(a => nextLetter(a));
};

module.exports = number_map_to_word_over_26;
