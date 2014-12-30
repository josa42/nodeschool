// Hexadecimal Encoding

// console.log(process.argv.slice(2));
var buffer = new Buffer(process.argv.slice(2));
console.log(buffer.toString('hex'));
