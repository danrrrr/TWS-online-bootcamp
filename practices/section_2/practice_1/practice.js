function count_same_elements(collection) {
  let result = new Map();
  let regx = /(\w)\-?(\d*)/
  let value = 0;
  collection.forEach(ele =>{
      value = result.has(ele) ? value + 1 : 1;
      result.set(ele,value);
      });
      let arr = [];
      result.forEach((value, key) => arr.push({key:key, count:value}));
  return arr;
}

module.exports = count_same_elements;
