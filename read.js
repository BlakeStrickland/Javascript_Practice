
/*get file system*/
var fs = require('fs')
/*grab the 3rd process*/
var file = process.argv[2]
/*read file using utf8*/
var fileBuffer = fs.readFileSync(file, 'utf8')
/*remove false linebreaks?*/
var fileBuffer = fileBuffer.replace(/\n+$/, '');
/*create buffer (array) split on new line characters*/
fileBuffer = fileBuffer.split('\n');
/*subtract 1 for line breaks not lines*/
lineCount = fileBuffer.length-1;

console.log(lineCount);
// var buffer = fs.readFileSync("readfile.txt")

// var string = buffer.toString()
//
// var array = string.split("\n")
//
// console.log((array.length - 1))
// console.log(string)
// console.log(array)
// console.log(file)
// console.log(fileBuffer)
