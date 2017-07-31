function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  collection_a.forEach(x => {
      if (object_b['value'].indexOf(x.key) !== -1)
        x.count--;
  });
  return collection_a;
}

module.exports = create_updated_collection;
