// Understanding the problem
// Restating
// The function will take a sorted array as an argument and find out how many unique values it contains e.g. if it has five 2's and one 1
// then there are a total of 2 unique values 1 and 2, and the function return the count of unique values e.g. 2

// inputs --> sorted arrays containing numbers both positive and negative
// outupt --> Number literal representing count of unique values

// Concrete Examples
// Simple Examples
// console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
// console.log(countUniqueValues([1, 2, 3, 4, 5, 4, 7, 7, 12, 12, 13])); // 7
// console.log(CountUniqueValues[])); // 0
// console.log(CountUniqueValues[-2, -1, -1, 0, 1])); // 4

// Complex Examples
// 
// Invlaid inputs
// 

// Break it Down
// --> The function countUniqueValue takes a sorted array
// --> 
// --> create two pointer
// --> loop over the the sorted array 
//    -->  left pointer will point at the first element in the array
//    --> right pointer will pointer at the element next to the first element
//    --> Compare the two elements if they are equal will move the right pointer
//        one index to the right and compare those values and leave left pointer
//        where it is, then compare the values at current index again if they are
//        still the same we are going to move the right pointer to the right again
//        , Right pointer is like our scout, then again we will compare the 
//         values at the current indexes and if they differnt we are going to move
//         the left pointer to one index to the right and put the element at right
//         index next to the element at the left index. Then we are going to move 
//         the right index forward again and then compare the values again, if they
//         different we'll move the values at right index next to the value at left index
//    --> When right most index has reached the last element in the array we would have
//        our unique element sorted beginning from the index 0 till the index at left pointer
//    --> to find the number of unique values we just have to add one to the left pointer


function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  let leftPointer = 0;
  let rightPointer = 1;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[leftPointer] === arr[rightPointer]) {
      rightPointer += 1;
    } else {
      leftPointer += 1;
      arr[leftPointer] = arr[rightPointer];
      rightPointer += 1;
    }
  }
  console.log(arr);
  return leftPointer + 1;

} 
console.log(countUniqueValues([1,1,1,1,1,2]));
console.log(countUniqueValues([1, 1, 1, 2, 3, 3, 4, 4, 5, 6]));
//console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, ,7, 12, 12 ,13]));