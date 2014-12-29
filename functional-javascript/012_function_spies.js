// Function Spies

function Spy(target, method) {

  var spy = {count: 0};

  var func = target[method];

  target[method] = function() {
    spy.count++;
    return func.apply(target, arguments);
  };

  return spy;
}

module.exports = Spy;
