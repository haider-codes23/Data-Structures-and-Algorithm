// Write a function called averagePair. Given a sorted array of integers and a target
// average, determine if there is a pair of values in the array where the average of
// the pair equals the target average. There may be more than one pair that matches
// the average

// Understanding the problem
// Restating
// --> The function takes a sorted array of integers as argument and an integer
//     that is the target average. We have to determine if there is a pair in the 
//     array whoes average is equal to the target average argument. 
//     




// inputs --> An array of integers and an integer
// outupt --> Boolean value true or false

// Concrete Examples
// Simple Exampes
// console.log(averagePair([1, 2, 3], 2.5));// false
// console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));// true
// console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1));// true

// Complex Examples
// 
// Invlaid inputs


// Break it Dow
// --> First we will create two pointers
//    --> First pointer will point at the first element in the array
//    --> Second pointer will point at the last element in the array
// --> We will loop through the array until the left pointer is less than right pointer
//    --> Then we will average the values at both pointer
//       --> If the average is greater than target average we will decrement our right pointer
//       --> If the average is less than target average we will increment our left pointer
//       --> Then we will add the next pair of values and repeat the above process 
//       --> if we find a pair that equals the target average return true else return false


function averagePair(arr, targetAvg) {
  let leftPointer = 0
  let rightPointer = arr.length - 1;
  let tempAverageOfPair;

  while (leftPointer < rightPointer) {
    console.log(`${arr[leftPointer]} + ${arr[rightPointer]}`);
    tempAverageOfPair = (arr[leftPointer] + arr[rightPointer]) / 2;
    console.log(`Average: ${tempAverageOfPair}`);
    console.log("-----------------------------------------------")
    if (tempAverageOfPair === targetAvg) {
      console.log(`${arr[leftPointer]} + ${arr[rightPointer]}`);
      return true;
    }
    tempAverageOfPair > targetAvg ? rightPointer -= 1 : leftPointer += 1;
  }
  return false;
}

// console.log(averagePair([1, 2, 3], 2.5));// true
// console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));// true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1));// false

