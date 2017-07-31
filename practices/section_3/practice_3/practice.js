function create_updated_collection(collection_a, object_b) {
  let count = [];
  collection_a.forEach(x => {
      count[x] = !count[x] ? count[x] = 1 : count[x] + 1;
  });
  let result = [];
  for(let key in count){
    let temp = {};
    temp.key = key;
    temp.count = count[key];
    result.push(temp);
    }
 
  result.forEach(x => {
    if(object_b['value'].indexOf(x.key) !== -1){
      let m = parseInt(x.count / 3);
      x.count -= m;
      }
    });
  return result
}

module.exports = create_updated_collection;
