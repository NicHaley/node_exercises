var fs = require('fs');

var fileName = process.argv[2];

fs.readFile(fileName, function(err, content) {
	console.log(content.toString().split('\n').length - 1);
});
