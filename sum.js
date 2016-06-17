// // console.log(process.argv);
//
// var array = process.argv;
// var new_array = [];
// for (i = 2; i < (array.length); i++) {
//   number = Number(array[i])
//   new_array.push(number)
// };
// // console.log(new_array);
//
// var total = 0
// for (i = 0; i < new_array.length; i++) {
//   total += new_array[i];
// };
//
// console.log(total);

var result = 0

 for (var i = 2; i < process.argv.length; i++)
   result += Number(process.argv[i])

 console.log(result)
