// for (var count = 0; count < 10; count = count + 1)
//   if (count % 15 == 0)
//     console.log("FizzBuzz")
//   else if (count % 3 == 0)
//     console.log("Fizz")
//   else if (count % 5 == 0)
//     console.log("Buzz")
//   else
//     console.log(count)


function fizzbuzz(number) {
  for (var count = 0; count < number; count = count + 1)
    if (count % 15 == 0)
      console.log("FizzBuzz")
    else if (count % 3 == 0)
      console.log("Fizz")
    else if (count % 5 == 0)
      console.log("Buzz")
    else
      console.log(count)
}

console.log(fizzbuzz(100))
