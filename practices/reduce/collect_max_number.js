'use strict';

function collect_max_number(collection) {
  //在这里写入代码
  return collection.sort((a, b) => a - b).pop();
}

module.exports = collect_max_number;
