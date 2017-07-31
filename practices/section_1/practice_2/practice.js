function collect_same_elements(collection_a, collection_b) {
  const arr = collection_b.join('').split(',');
  return collection_a.filter(x => arr.indexOf(x) !== -1);
}

module.exports = collect_same_elements;
