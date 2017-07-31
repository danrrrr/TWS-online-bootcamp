function collect_same_elements(collection_a, object_b) {
  let arr_a = [];
  collection_a.forEach(x => arr_a.push(x.key));
  return arr_a.filter(x => object_b['value'].indexOf(x) !== -1);
}

module.exports = collect_same_elements;
