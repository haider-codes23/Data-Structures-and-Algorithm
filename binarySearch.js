function binarySearch (arr, num) {
  let leftPointer = 0;
  let rightPointer = arr.length - 1;
  let middlePointer = Math.floor((leftPointer + rightPointer) / 2);
  while (leftPointer <= rightPointer) {
    console.log(leftPointer, middlePointer, rightPointer, '*');
    console.log("****************************************");
    if (arr[middlePointer] === num) {
      return middlePointer;
    } else if (arr[middlePointer] < num) {
      leftPointer = middlePointer + 1;
      middlePointer = Math.floor((leftPointer + rightPointer) / 2);
      
    } else {
      rightPointer = middlePointer;
      middlePointer = Math.floor((leftPointer + rightPointer) / 2);
    }
    console.log(leftPointer, middlePointer, rightPointer);
  }
  return -1;
}

// Whats the Big O of the above binary search algorithm ?
// E.g. in the array [5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99] we have 20 elements
//     after the first comparison we were only looking at this array, 
//     at step-1 we were looking at this array [5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99]
//     at step 2 we were looking at this array[5, 6, 10, 13, 14, 18, 30, 34, 35, 37]
//     at step 3 we were looking at this array [5, 6, 10, 13, 14]
//     so it took 3 steps to find the element from 21 elements thus we can say 20 elements = 3 steps . So that relationship is Log base 2 of N, which
//     we simply to Log N, which basically means 2 to what power gives us N or what is log base 2 of 20 which is 

// //console.log(binarySearch([1, 3, 4, 6, 8, 9, 11, 12, 15, 16, 17, 18, 19], 15));
// console.log(binarySearch([2, 5, 9, 13, 15, 28, 30, 35], 2));
// //                        0  1  2  3   4   5    6   7

//console.log(binarySearch([1,2,3,4,5],2));
console.log(binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 10)); // 2
