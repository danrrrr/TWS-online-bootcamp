function collect_same_elements(collection_a, object_b) {
  return collection_a.filter(x => object_b['value'].indexOf(x) !== -1);
}

module.exports = collect_same_elements;
