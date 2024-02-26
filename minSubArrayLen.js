// Write a function called minSubArrayLen which accepts two parameters - an array of positive
// integers and a positive integer. This function should return the minimal length of a
// a contigious subarray of which the sum is greater than or equal to the integer
// passed to the function. If there isn't one, return 0 instead.

// Understanding the problem
// Restating
// The function takes an array and a number as an argument and find the minimal lenght
// of the array who's sum is greater than or equal to the number provided as argument

// inputs --> An array and an integer
// outupt --> number of elements whoes sum is greater than or equal to number 
//            provided as argument.

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
// create a variable to store the sum of elements called totalSum = 0
// create a variable to store the tempTotalSum
// assign the first element of the array into the totalSum
// --> check if the totalSum is greater than or equal to number arg
//     --> if the totalSum is greater than or equal to number arg return 1
// OtherWise
// --> loop over the array
//    --> add a subsequent number from the array
//        --> if the totalSum is greater than or equal to number arg return that
//    --> add the elements one by one into totalsum
//       --> check if the sum is equal to the number argument provided
//           --> return the number of elements added which will be equal to current iterations of the loop
//       --> check if the sum is less than number argument 
//           --> add another element+

function minSubArrayLen(nums, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;
 
  while (start < nums.length) {
    // if current window doesn't add up to the given sum then 
		// move the window to right
    if(total < sum && end < nums.length){
      total += nums[end];
			end++;
    }
    // if current window adds up to at least the sum given then
		// we can shrink the window 
    else if(total >= sum){
      minLen = Math.min(minLen, end-start);
			total -= nums[start];
			start++;
    } 
    // current total less than required total but we reach the end, need this or else we'll be in an infinite loop 
    else {
      break;
    }
  }
 
  return minLen === Infinity ? 0 : minLen;
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7));


// Break it down
// --> Firstly we will create a variable to store minimum length of subarray and initialize it with 
//     infinity, because this values gurantees to be greater than any possible lenght of subarray
// --> Then we will create a left pointer that will represent the left side of window
// --> Then we will create a right pointer that will represent the right side of the window
// --> Then we will create a vairable to store the current Sum and intialize it with 0
// --> Then we will loop over the the array until our right pointer is less than array's length
//    --> Inside the loop we will add the element at the right most of the window that is 
//        the element at the right side of the window to the variable currentSum
//    --> Then we will create another loop and check whether the currentSum is greater than
//         or equal to targer sum
//        --> if it is we update minlength by sliding the left side of the window one step to the right
//        -->  
//    --> Then we will check if the greater than or equal to the target sum
//       