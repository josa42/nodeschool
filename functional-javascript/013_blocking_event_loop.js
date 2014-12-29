// Blocking Event Loop

function repeat(operation, num) {
  // modify this so it can be interrupted
  if (num <= 0) return;

  operation();

  setTimeout(function() {
    repeat(operation, --num);
  });

}

module.exports = repeat;
