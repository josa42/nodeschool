// Implement Map with Reduce

function arrayMap(arr, fn) {
  return arr.reduce(function(mapped, value, index) {
    mapped[index] = fn(value);
    return mapped;
  }, []);
}

module.exports = arrayMap;
