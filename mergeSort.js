// Step -1 --> merge two arrays 
// Create a function that takes two sorted array as input, merges the two array while sorting them and returns that array
// Create an empty array called result
// take a look at the smallet values in each input array 
// Create two counters one called i and the other one called j both start at 0
// use while loops for looping over the array, keep looping until there are still values we haven't looked at e.g. i and j havent hit the end of there respective array
// Within the loop check
//  - if the value in the first array is smaller than the value in the second array, push the value in the first array into our results array
// e.g. [1, 3, 5, 7], [2, 4, 6, 8] here we will start comparing 1 and 2, 1 is samller so we push 1 in the results array, then we will compare 3 and 2, 2 is smaller, so we will
// push 2 in the results array. 
//  - if the value in the first array is larger than the value in the second array, push the value in the second array into our results and move on to the 
//    the next value in the second array e.g. [3, 5, 7, 9], [1, 3, 5, 7] here we will start comparing 3 and 1, 1 is smaller so we will push 1 in the results 
//    array and move on to the next value in the second array.
// During the first iteration both our counter were at 0, during the second iteration our counter i was at index 1 and counter j was at index 0,e.g. when an element is pushed into
// the results array, we increment the counter corresponding to that array only, the counter corresponding to the other array remains where it is.

// Once we exhaust one array, push in all the remaining values from the other array

function merge(firstArr, secondArr) {
  let results = [];
  let counterI = 0;
  let counterJ = 0;
  while (counterI < firstArr.length || counterJ < secondArr.length) {
    if (firstArr[counterI] < secondArr[counterJ]) {
      results.push(firstArr[counterI]);
      counterI++;
    } else if (secondArr[counterJ] < firstArr[counterI]) {
      results.push(secondArr[counterJ]);
      counterJ++;
    }
    else if (firstArr[counterI] === secondArr[counterJ]) {
      results.push(firstArr[counterI]);
      counterI++;
      results.push(secondArr[counterJ]);
      counterJ++;
    }
    else {
      if (counterI === firstArr.length && secondArr[counterJ] !== undefined) {
        results.push(secondArr[counterJ]);
        counterJ++;
      }
      if (counterJ === secondArr.length && firstArr[counterI] !== undefined) {
        results.push(firstArr[counterI]);
        counterI++;
    }
    }
  }

  return results;

}
//console.log(merge([1, 10, 50], [2, 14, 99, 100]));

// step -2 Splitting the arrays into halves until we have arrays that are empty or have one element
// Use Array.slice() method which takes two optional arguments, first one is the index at which to start extracting
//                   second one is the index at which to start end extraction, end index is not included in the extracted array
//                   In the end it returns a new array with the extracted elements. IF we dont provide it the second argument 
//                   it returns an array beginning from the start index till the end of the array, if we dont provide it any argunent 
//                   it returns a shallow copy of the array. 
// The array should be sliced from the middle e.g. if we have an array of 8 elements it will spit into two arrays of 4 elements then we 
// are going to call merge sort again and slpit the 4 element arrays into two array that contain 2 elements each, then again we will recusively call 
// split method again and slipt the 2 elements arrays into 1 elements arrays 
// The base case is that when the arrays length is equal to 1 or 0
// So now the question is how can we use slice method to slice an array of e.g. 7 elements into 7 arrays 

// the slice methods is called by an array of 8 elements, we pass it the argument 
// [4, 3, 1, 2, 7, 5, 6, 8].slice()

function mergeSort(arr) {
  // This is the base case we will keep splitting and keeping passing the recursive function
  // a smaller array or halved array and when we pass the recursive function an array that has either 1
  // element or 0 element then its going to return that array e.g. [4,3,2,1] is the array with which we
  // called our mergeSort function, it's going to split it first into [4, 3] and [2, 1], then it's going
  // to split it into [4], [3], [2], [1]  
  if (arr.length <= 1) return arr;
  // arr.length = 4 False
  // First recursive pass --> arr.length = 2
  // second recusive pass --> arr.length = 1 true return [10]
  
  // firstly split the array into two halves, then recursively call mergerSort on the halves to split them again
  let midPoint = Math.floor(arr.length / 2);
  // First Pass midpoint = 2
  // second Pass midpoint = 1


  // let leftHalf = arr.slice(0, midPoint);
  // let rightHalf = arr.slice(midPoint);
  // Here we split the array into half and then pass the halfed array again to recursive function mergeSort which will
  // further split it into half until the length of the halved array reaches 1 or 0
  let leftHalf = mergeSort(arr.slice(0, midPoint));
  // passed [10, 24, 76, 73]
  // First recursive pass--> mergeSort([10, 24])
  // second pass--> mergeSort([10]) return [10]
  //                 
  let rightHalf = mergeSort(arr.slice(midPoint));
  // on first pass this is going to get passed mergeSort([10, 24]) it's going to slice the right half off it and pass that to recursive call mergerSort([24]) --> which will return us --> [24]

  // Then once the arrays have been split we need to merge them back as a sorted array
  // once the first half [10, 24] were split into [10] and [24] they will be passed to merge function merge([10], [24]) which will return [10, 24]
  return merge(leftHalf, rightHalf);

}

console.log(mergeSort([10, 24, 76, 73, 5]));