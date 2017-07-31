function count_same_elements(collection) {
  let regx = /(\w{1}).?(\d*)\]?/;
  let result = new Map();
  collection.forEach(ele =>{ let [_, key, value] = ele.match(regx);
      value = value === "" ? 1 : parseInt(value);
      value = result.has(key) ? result.get(key) + value : value;
      result.set(key, value);
      });
      let arr = [];
      result.forEach((value, key) => arr.push({name:key, summary:value}));
  return arr;
}

module.exports = count_same_elements;
