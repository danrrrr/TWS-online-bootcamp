function create_updated_collection(collection_a, object_b) {
  let result = new Map();
  let regx = /(\w)\-?(\d*)/;
  collection_a.forEach(ele =>{ let [_, key, value] = ele.match(regx);
      value = value === "" ? 1 : parseInt(value);
      value = result.has(key) ? result.get(key) + value : value;
      result.set(key, value);
      });
      let arr = [];
      result.forEach((value, key) => arr.push({key:key, count:value}));
      arr.forEach(x => {
        if(object_b['value'].indexOf(x.key) !== -1){
          let m = parseInt(x.count / 3);
          x.count -= m;
        }
      });
      return arr;
}

module.exports = create_updated_collection;
