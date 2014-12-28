// Basic: Recursion

function reduce(arr, fn, initial) {

  function cb(value, index) {
    if (index >= arr.length) return value;
    return cb(fn(value, arr[index], index, arr), ++index);
  }

  return cb(initial, 0);
}

module.exports = reduce;
