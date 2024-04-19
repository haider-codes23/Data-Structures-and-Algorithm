function pivot(arr, startIndex = 0, endIndex = arr.length - 1) {

  // First we are going to store the first value in the array, which will act as our pivot
  let pivot = arr[startIndex];

  //  Create a variable called Swap index, it is going to keep track of where we are going to swap our pivot e.g. at the very end when the loop has finished executing
  //   and this is also the index which we are going to return 
  // And we are going to start it at the very beginning e.g. the index of the first element in the array
  let swapIndex = startIndex;
  // Next we need to loop over the items in the array except the first one becasue that is our pivot 
  
  for (let i = startIndex + 1; i <= endIndex; i++) {
    
    // Here we want to compare our pivot with the  arr[i] the next element we are looking at
    // If our pivot is less than the element we are looking at we'll do nothing
    // IF our pivot is greater than the element we are looking at we'll incremenet swapIndex by 1, meaning there is one element that is less than our pivot
    // Then what we are going to do is move all the numbers that are less than the element at the swap index to the left of the swap index
    if (pivot > arr[i]) { // 4 > 8(F), 4 > 2(T)
      console.log("***************************************");
      console.log(`Before Swapping ${arr}`);
      
      swapIndex++;
      console.log(`Need to swap ${arr[swapIndex]} and ${arr[i]}`);
      [arr[swapIndex], arr[i]] = [arr[i], arr[swapIndex]];
      // 8          2           2        8
      console.log(`After Swapping ${arr}`);
      console.log("***************************************");
    }
  }
  // At last we will swap our pivot element which is at the start index with the element at the swapIndex, now all the elements less than pivot element will b
  // to the left of the pivot element and all the elements greater than pivot element to the right of the pivot element
  [arr[startIndex], arr[swapIndex]] = [arr[swapIndex], arr[startIndex]];
  console.log(`End Result : ${arr}`);
  // In the end we will return swap index
  return swapIndex;
}
//                 0  1  2  3  4  5  6  7
//console.log(pivot([4, 6, 9, 1, 2, 5, 3]));
//                
//                

// create a function called quick sort that takes an array as argument 
function quickSort(arr, startIndex = 0, endIndex = arr.length - 1) {
  if (startIndex < endIndex) {
      // At the very start we will call the pivot method and pass it the array, it will be looking at the entire array from fist element till the last element
    // it will return us the index of the pivot, e.g. the sorted position(index) of the pivot inside the array
    let pivotIndex = pivot(arr, startIndex, endIndex);

    // when the pivot helper function return the index(sorted position) of the pivot, next thing we are going to do
    // is call pivot helper function on both sides of the pivot element e.g the left side(subarray to the left of that index)
    // and the right side(subarray to the right of that index). It's important to know that we are not creating new arrays, we'll be
    // working with the same array. In this case to call the pivot helper function we will be recursively calling the quickSort function 
    // which will inturn call the pivot helper function with the array, startIndex and endIndex.

    // Firstly we will recursively call the the quickSort function on the left side of the pivot, now the left side has a start index
    // and a end index, it starts from the very beginning till the pivot index and pivot index is not included
    quickSort(arr, startIndex, pivotIndex - 1);

    // secondly we will recursively call the quicksort function on the right side of the pivot, now the right side has a start index and an end index
    // start index will be index next to the pivotIndex and the end index will be the last element in the array which is the endIndex
    quickSort(arr, pivotIndex + 1, endIndex);



    // Our quickSort function is a recursive function so it's going to have a base case, e.g. when the subarray has 1 item in it, becasuse we
    // will be working with the same array we dont have to check the length of the array, we will looking at the startPoint and endPoint e.g.
    // when the subarray become samller the startIndex and endIndex  will become closer and closer together e.g. the first time pivot get called
    // startIndex = 0 and endIndex = 6, when the pivot get called the 2nd time on the right side of the pivot startIndex is 0 and endIndex = 2, when pivot gets called 3rd time 
    // startIndex is 0 and endIndex = 1 and when pivot get called 4rth time startIndex = 0 and endIndex = 0, so our base case (that we want to keep running this code)
    // if startIndex < endIndex, the moment leftIndex and rightIndex become equal
    // 
  }
  // In the end we would return the sorted array
  return arr;
}
//                
console.log(quickSort([4, 6, 9, 1, 2, 5, 3]));


