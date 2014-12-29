// Function Call

module.exports = function(arr, begin, end) {
    return Array.prototype.slice.call(arr, begin, end);
};
