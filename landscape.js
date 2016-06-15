var landscape = function() {  var result = "";  var flat = function(size) {    for (var count = 0; count < size; count++)    result += "_";  };var mountain = function(size) {  result += "/";  for (var count = 0; count < size; count++)    result += "'";    result += "\\";};
flat(4);mountain(4);flat(3);
mountain(3);mountain(1);flat(1);
mountain(2);
flat(1);return result;};

console.log(landscape())
