function pivot(arr, startIndex = 0, endIndex = arr.length - 1) {

  // First we are going to store the first value in the array, which will act as our pivot
  let pivot = arr[startIndex];

  //  Create a variable called Swap index, it is going to keep track of where we are going to swap our pivot e.g. at the very end when the loop has finished executing
  //   and this is also the index which we are going to return 
  // And we are going to start it at the very beginning e.g. the index of the first element in the array
  let swapIndex = startIndex;
  // Next we need to loop over the items in the array except the first one becasue that is our pivot 
  
  for (let i = startIndex + 1; i < arr.length; i++) {
    
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
console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3]));
//                
//                
//                