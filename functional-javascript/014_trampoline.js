// Trampoline

function repeat(operation, num) {
  // Modify this so it doesn't cause a stack overflow!
  if (num <= 0) return;
  operation();
  return repeat.bind(null, operation, --num);
}

function trampoline(fn) {
  while (fn) fn = fn();
}

module.exports = function(operation, num) {
  // You probably want to call your trampoline here!
  return trampoline(repeat(operation, num));
};
