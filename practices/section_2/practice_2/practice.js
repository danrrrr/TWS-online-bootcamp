function count_same_elements(collection) {
  //在这里写入代码
  let result = new Map();
  let regx = /(\w)\-?(\d*)/;
  collection.forEach(ele =>{ let [_, key, value] = ele.match(regx);
      value = value === "" ? 1 : parseInt(value);
      value = result.has(ele) ? result.get(ele) + value : value;
      result.set(key, value);
      });
      let arr = [];
      result.forEach((value, key) => arr.push({key:key, count:value}));
  return arr;
}

module.exports = count_same_elements;
