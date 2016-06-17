function multiplier(factor) {
  return function(number) {
    return number * factor;
}; }
var twice = multiplier(2); console.log(twice(5));
// ◃ 10


 function power(base, exponent) {
   if (exponent == 0)
     return 1;
   else
     return base * power(base, exponent - 1);
 }
 console.log(power(2, 3));


/*
    n11n00 − n10n01
φ = √n1• n0• n1• n0

function phi(table) {
       return (table[3] * table[0] - table[2] * table[1]) /
         Math.sqrt((table[2] + table[3]) *
                   (table[0] + table[1]) *
                   (table[1] + table[3]) *
                   (table[0] + table[2]));
     }
     console.log(phi([76, 9, 4, 1]));
// ◃ 0.068599434

*/
