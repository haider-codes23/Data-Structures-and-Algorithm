// Given an array of integers and a number write a function called maxSubarraySum, which
// find the maximum of a subArray with the length of the number passed to the function

// Understanding the problem
// Restating
// The function takes an array and a number as an argument and uses that number to sum 
// that many consecutive numbers in an array and return the sum which is maximum

// inputs --> An array and an integer
// outupt --> maximum sum of n integers 

// Concrete Examples
// Simple Exampes
// console.log(maxSubarraySum([100, 200, 300, 400], 2));// 700
// console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4);// 39
// console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2);// 5
// console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2));// 5 
// console.log(maxSubarraySum([2, 3], 3);//null 
// Complex Examples
// 
// Invlaid inputs
// 

// Break it Down
// --> If length of array is greater than the number provided as argument(n) return null
// --> Then create a variable called maxSum = 0
// --> Then create a varibale called tempSum = 0
// --> Then loop over the array and just add the first n elements and assign that to maxSum
// --> Then outside the loop assign maxSum to tempSum
// --> Then we will loop over the array again and this time start iterating from nth element in the array
//   --> Within the loop on each iteration we will subtract the first element from the array and add a subsequent
//       element from tempSum and assign the newly calulated value to tempSum
// --> Then we will check whether tempSum is greater or maxSum is greater and assign maxSum the greater value
//    

//    --> In the end return maxSum


function maxSubarraySum (arr, num) {
  if (num > arr.length) return null;

  let tempSum = 0;
  let maxSum = 0;
  
  for (let i = 0; i < num; i++) {
    maxSum = maxSum + arr[i];
  }
tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    console.log("Entered 2nd loop");
    tempSum = tempSum - arr[i - num] + arr[i]
    maxSum = Math.max(tempSum, maxSum);
  }
  return maxSum;
}

console.log(maxSubarraySum([100, 200, 300, 400], 2));// 700
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));// 39
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2));// 5
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2));// 5 
console.log(maxSubarraySum([2, 3], 3));//null 