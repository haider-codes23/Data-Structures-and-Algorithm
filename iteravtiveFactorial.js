// Factorial is the product of an integer and the numbers below it
// Factorial iteratively

function factorialIteratively(num) {
  let product = 1;
  for (let i = num; i > 0; i--) {// i = 3; 3 > 0; 3--  // i = 2; 2 > 0; 2-- // i = 1; 1 > 0; 1--
    product = product * i;//     product = 1 * 3 = 3  // product = 3 * 2 = 6 // product = 6 * 1 = 6
  }
  return product; // return 6;
}

// console.log(factorial(3)); // 6


