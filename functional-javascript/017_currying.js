// Currying

var slice = Array.prototype.slice;

function curryN(fn, n) {

  n = n || fn.length;

  var fargs = slice.call(arguments, 2);

  return function(arg) {

    var args = fargs.slice(0);
    args.push(arg);

    if (n === 1) {
      return fn.apply(null, args);
    } else {}

      return curryN.apply(null, [fn, n - 1].concat(args));
  };
}

module.exports = curryN;
