
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
//   inner loop is exected for the outer loop we have one less element to compare and the reason why we start our outer 
//   loop from the end is because we could use i(index) in the defintion of our inner loop, each time outer loop finishes 
//   one iteration it's value decreases by 1 and the inner loop also each time has to go through one less iteration. We want to shrink the number
//   of comparsions we are making becasue we are sorting our array as we go

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

//console.log(bubbleSort_1([37, 45, 29, 8]));

//-------------------------------------------------------------------------

function bubbleSort (arr) {
  let temp = 0;
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      console.log(`Before Sorting: ${arr}`);
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        console.log(`After Sorting: ${arr}`);
        noSwaps = false; // this will only be false if a swap is made
      }

    }
    if (noSwaps) {
      console.log("Breaking!");
      break;
    }
    console.log(`pass completed`);
  }
  return arr;
}

// console.log(bubbleSort([8, 1, 2, 3, 4, 5, 6]));

// ******************************************************
function bubbleSort_2 (arr) {
  let temp = 0;
  let noSwaps;
  for (let i = 1; i <= arr.length; i++) {
    noSwaps = true;
    for (let j = 0; j < arr.length - i; j++) {
      console.log(`Before Sorting: [${arr}]  ${arr[j]} && ${arr[j + 1]}`);
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        console.log(`After Sorting: ${arr}`);
        noSwaps = false; // this will only be false if a swap is made
      }

    }
    if (noSwaps) {
      console.log("Breaking!");
      break;
    }
    console.log(`pass completed`);
  }
  return arr;
}  

console.log(bubbleSort_2([8, 1, 2, 3, 4, 5, 6]));


//Wahts the Big O of Buuble sort