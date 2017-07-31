'use strict';
var rank_asc = function(collection){
  return collection.sort((a,b) => a<b);
};

module.exports = rank_asc;
