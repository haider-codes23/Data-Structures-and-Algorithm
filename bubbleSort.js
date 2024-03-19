
// In the Below function
// - The first time we loop through the array we doing total of 4 comparsions and the last comparison is between 
//   45 and undefined, that means we are doing one extra comparison, we have total of 4 elements and there needs
//   to be only 3 comparsions. And once these 3 comparisons are completed bubble sort is going to bubble up the 
//   the largest value to the top, which means the next time we are going to compare the elements we will have only 
//   3 elements to compare and 2 comparisons, at the end of which bubble sort will bubble up the largest value to the top.
//   Then the next time we will only be left with 2 elements to sort which means we only need one comparisons. 
// - So for each iteration of the outer loop we get one element that is sorted into it's place and in the next iteration
//   of the inner loop we need to sort one less element, the way we can do that is start our outer loop from the end 
//   of the array and start our inner loop from the begining till 1 less than from where the outer loop started, so each time
//   inner loop is exected for the outer loop we have one less element to compare.

function bubbleSort_1(arr) {
  for (let i = 0; i < arr.length; i++){
    for (let j = 0; j < arr.length - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
      
    }
    console.log(`${i + 1}st pass completed`);

  }
}

console.log(bubbleSort_1([37, 45, 29, 8]));

//-------------------------------------------------------------------------

function bubbleSort (arr) {
  let temp = 0;
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

//console.log(bubbleSort([29, 10, 14, 30, 37, 14, 18]));