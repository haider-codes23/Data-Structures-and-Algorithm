// Understand the problem 
// -->  Can you restate the problem in your own words
//      -write a function that takes an array as an argument and retruns
//       the product of all the elements in the array
// -->  Whats the input to the function
//      - An array
// -->  Whats does the function output
//      - an integer
// --> do you have enough information to solve the problem
// --> How to label important pieces of information in the problem
//     - result for storing the product


// Explore concrete examples

// --> type two or three simple examples with inputs and outputs 
//     productOfArray([1, 2, 3]) //6
//     productOfArray([1, 2, 3, 10]) //60
//     productOfArray([3]) // 3
//     productOfArray([]) // 0
// --> Explore more complex examples 
// --> Explore examples with invalid input
// --> Explore examples with empty inputs

// Break it down
// --> write down the steps to actually solve the problem, it doesn't have to be full pseudocode or valid syntax 
//     just plain English. It forces you to think about your code before you actually start coding it. And it helps 
//     to catch any lingering misconceptions or issues before you dive in to coding
//     - the function has one parameters called arr
//     - if the lenght of the array is 0 then return 0
//     - if the lenght of the array is 1 then return the element itself
//     - Each time the function is called remove last element from the array and multiply 
//       it with a recursive call to the function which takes the mutated array  , this function would then 
//       remove the last element again, in the end when the last element is left in the 
//       array return that element.
//     - 
// solve and simplfy
// look back and refactor 
// --> can you check the result -- Does the soltuon work
// ->> can you solve the problem differently --  different approach
// --> can you understand it at a glance -- does it make sense 
// --> can you imporove its time and space complexity 
// --> how have others solved it

function productOfArray(arr) {
  
  if (arr.length === 1) {
    return arr[0];
  }
  let product = 1;
  let elementPopped = arr.pop();

  return elementPopped * productOfArray(arr);

}
console.log(productOfArray([1, 2, 3]));
//                return 3 * productofArray([1, 2]);--> 3 * 2 = 6
//                             return 2 * productOfArray([1]);--> 2 * 1 = 2
//                                           return 1






