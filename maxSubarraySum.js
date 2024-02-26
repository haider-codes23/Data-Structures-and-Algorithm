// Write a function called maxSubarraySum which accpets an array of integers
// and a number called n. The function should calculate the maximum sum of n
// consecutive elements in the array

// Understanding the problem
// Restating
// The function takes an array of numbers and a integer called n as arguments
// it calculates the sum of n consective integers and returns the integers which 
// have the maximum sum along with with there sum

// inputs --> An array and an integer 
// outupt --> n integers and there sum

// Concrete Examples
// Simple Exampes
// console.log(maxSubarraysum([1, 2, 5, 8, 1, 5], 2));// 10
// console.log(maxSubarraysum([1, 2, 5, 2, 8, 1, 5], 4));// 17
// console.log(maxSubarraysum([4, 2, 1, 6], 1));// 6
// console.log(maxSubarraysum([4, 2, 1, 6, 2], 4)); // 13
// console.log(maxSubarraysum([], 4)); //null
// Complex Examples
// 
// Invlaid inputs
// 

// Break it Down
// --> First we handle the edge case e.g. if the the numbers passed as argument is greater
//     than the length of the array we will return null
// --> Create a variable that stores the max sum
// --> Create a variable that stores the temperory sum to check if its more than max
// --> Then we will loop through the first n elements in the array and add them together
// --> Then we will loop through the array again but start from the n that is the 
//     element next to the last n elements added together.
// --> Inside the loop we will subtract the first element in the array from the temp sum
//     and add the element at the n index e.g. if we had an array [1, 2, 3, 4, 5, 6, 7]
//     We will in the first loop add 1 + 2 + 3 and in the next loop we will subtact 1 from
//     the total sum and and add 4 into it. 


function maxSubarraySum(arr, num) {
  if (arr.lenght < num) return null;
  let maxSum = 0;
  let tempSum = 0;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
    console.log(`maxSum: ${maxSum}`);
  }
  console.log("exiting first loop");
  tempSum = maxSum;
  for (let j = num; j < arr.lenght; j++) {
    console.log('Entered 2nd For loop');
    tempSum = tempSum - arr[j - num] + arr[j];
    maxSum = Math.max(maxSum, temp);
    console.log(`maxSum: ${maxSum} + tempSum: {tempSum}`);
    console.log("----------------------------------------");
  }

  return maxSum;

  //console.log(temp);
}

console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3] ,3));
//console.log(maxSubarraySum([-3,4,0,-2,6,-1], 2));
