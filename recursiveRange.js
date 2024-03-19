// Understand the problem 
// -->  Can you restate the problem in your own words
//      -write a function that takes a number as an argument and returns the sum of the numbers 
//       starting from 0 uptill the number passed as argument 
// -->  Whats the input to the function
//      - An integer
// -->  Whats does the function output
//      - an integer
// --> do you have enough information to solve the problem
//     yes
// --> How to label important pieces of information in the problem
//     - result for storing the sum 


// Explore concrete examples

// --> type two or three simple examples with inputs and outputs 
//     recursiveRange(6) //21
//     recursiveRange(10) //55
//     recursiveRange(1) // 3

// --> Explore more complex examples 
//     productOfArray(0) // 0
// --> Explore examples with invalid input
// --> Explore examples with empty inputs

// Break it down
// --> write down the steps to actually solve the problem, it doesn't have to be full pseudocode or valid syntax 
//     just plain English. It forces you to think about your code before you actually start coding it. And it helps 
//     to catch any lingering misconceptions or issues before you dive in to coding
//     - the function takes a number as an argument 
//     - add the number passed to it as argument + recursive call to the function with an argument that is one number less than the argument and return this whole thing
//     - The recursive calls would stop when the number passed to the recursive calls equals 0, that is when we would return 0
// solve and simplfy
// look back and refactor 
// --> can you check the result -- Does the soltuon work
// ->> can you solve the problem differently --  different approach
// --> can you understand it at a glance -- does it make sense 
// --> can you imporove its time and space complexity 
// --> how have others solved it

function recursiveRange(integer) {
  if (integer === 0) {
    return 0;
  }

  return integer + recursiveRange(--integer);
}

console.log(recursiveRange(1));