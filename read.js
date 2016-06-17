var fs = require('fs')
var buffer = fs.readFileSync("read.js")

var string = buffer.toString()

var array = string.split("\n")

console.log((array.length))
