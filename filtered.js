/* Save the file system and path*/
var fs = require('fs');
var path = require('path')
/* Read the folder and find desired extension */
fs.readdir( process.argv[2], function (err, list) {
  list.forEach(function (file) {
    /* Double check file name and extension */
    if (path.extname(file) === '.' + process.argv[3])
      console.log(file)
  })
});
