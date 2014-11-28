var fs = require('fs');

var fileName = process.argv[2];

var content = fs.readFileSync(fileName);

var string = content.toString();

console.log(string.split('\n').length - 1);
