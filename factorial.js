// Understand the problem 
// -->  Can you restate the problem in your own words
//      -write a function that takes a numbers and returns its factorial, factorial is the product of a number
//       and all the numbers below it except 0;
// -->  Whats the input to the function
//      - An integer number
// -->  Whats does the function output
//      - factorial of that number
// --> do you have enough information to solve the problem
// --> How to label important pieces of information in the problem
//     - result for storing the product


// Explore concrete examples

// --> type two or three simple examples with inputs and outputs 
//     factorial(2) //1
//     factorial(3) //4
//     factorial(0) //16
// --> Explore more complex examples 
// --> Explore examples with invalid input
// --> Explore examples with empty inputs

// Break it down
// --> write down the steps to actually solve the problem, it doesn't have to be full pseudocode or valid syntax 
//     just plain English. It forces you to think about your code before you actually start coding it. And it helps 
//     to catch any lingering misconceptions or issues before you dive in to coding
//     - the function has one parameters called integer
//     - the base case where the recursion would stop is if integer = 0, in that case it would return 1
//     - then we would multiply the base with the return value of recursive call to factorial function and 
//        we need to call the recursive function factorial with changing data set or that which reduces 
//     - 
// solve and simplfy
// look back and refactor 
// --> can you check the result -- Does the soltuon work
// ->> can you solve the problem differently --  different approach
// --> can you understand it at a glance -- does it make sense 
// --> can you imporove its time and space complexity 
// --> how have others solved it

function factorial(integer) {
  //if (integer === 0) return 1;
  if (integer <= 1) {
    return 1;
  }

  return integer * factorial(integer - 1);
}

console.log(factorial(7));
//            return 3 * factorial(2)
//                         return 2 * factorial(1)
//                            return 1