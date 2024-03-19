// Understand the problem 
// -->  Can you restate the problem in your own words
//      -write a function that takes a number e.g. n as an argument and returns the nth number in the fibonacci sequence, in the fibanacci sequence the
//       first two numbers are 0 and 1. And where every number thereafter is equal to the sum of the previous two numbers 
//       
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


function fibanacci(n) {
  if (n < 2) {
    return n;
  }
  
  return fibanacci( n - 1 ) + fibanacci( n - 2 );
  
}

console.log(fibanacci(5));
//              return fibanacci(4)                                +                                  fibanacci(2)
//                       return fibanacci(3)       +            fibanacci(2)                                    return fibanacci(1)   + fibanacci(0)
//                               return fibanacci(2)+fibanacci(0)     return fibanacci(1)+ fibancaai(0)              return 1               return 0
//                                         return fib(1) + fib(0)              return 1 +   return 0
//                                                  return 1 + return 0