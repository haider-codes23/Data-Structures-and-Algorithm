// Understand the problem 
// -->  Can you restate the problem in your own words
//      -Write a function that takes two arguments, first is the base and the second is it's power, the function should return the power of the base to the exponenet
// -->  Whats the input to the function
//      - A base and a power
// -->  Whats does the function output
//      - power of the base to the exponent 
// --> do you have enough information to solve the problem
// --> How to label important pieces of information in the problem
//     - base and power


// Explore concrete examples

// --> type two or three simple examples with inputs and outputs 
//     power(2, 0) //1
//     power(2, 2) //4
//     power(2, 4) //16
// --> Explore more complex examples 
// --> Explore examples with invalid input
// --> Explore examples with empty inputs

// Break it down
// --> write down the steps to actually solve the problem, it doesn't have to be full pseudocode or valid syntax 
//     just plain English. It forces you to think about your code before you actually start coding it. And it helps 
//     to catch any lingering misconceptions or issues before you dive in to coding
//     - the function has two parameters called base and exponent
//     - the base case where the recursion would stop is if exponenet = 0, in that case it would return 1
//     - then we would multiply the base with the return value of recursive call to power function and 
//        we need to call the recursive function power with changing data set or that which reduces 
//     - 
// solve and simplfy
// look back and refactor 
// --> can you check the result -- Does the soltuon work
// ->> can you solve the problem differently --  different approach
// --> can you understand it at a glance -- does it make sense 
// --> can you imporove its time and space complexity 
// --> how have others solved it

function power(base, exponent) {
  if (exponent === 0) {
    return 1;
  }
  
  return base * power (base, exponent - 1);
}

console.log(power(5, 3));