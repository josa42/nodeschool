// Basic: Reduce

function countWords(inputWords) {
  return inputWords.reduce(function(sums, word) {
    sums[word] = (sums[word] || 0) + 1;
    return sums;
  }, {});
}

module.exports = countWords;
