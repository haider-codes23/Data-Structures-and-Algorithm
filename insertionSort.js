function insertionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    console.log("entered outer loop")
    let unsorted = i + 1;
    
    for (let j = i + 1; j > 0; j--) {
      console.log(`J: ${j} , before Comparing: ${arr} , comapring ${arr[j]} is less than ${arr[j - 1]}`);
      if (arr[j] > arr[j - 1]) {
        break;
      }
       else if (arr[j] < arr[j - 1]) {
        console.log("Swaping!!!");
        [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
        console.log(`After Swapping: ${arr}`);
      }
      
      

    }
    console.log("***********************************");
  }
  return arr;
}

//console.log(insertionSort([5, 3, 4, 1, 2]));
console.log(insertionSort([2, 1, 9, 76, 4]));

console.log(insertionSort([1, 2, 3, -1]));
//                         3, 5, 4, 1, 2
//                         3, 4, 5, 1, 2
//                         3, 4, 1, 5, 2
// [1, 2, 3, -1]
// j = 1 ,  1 > 0, 1 < 2 fasle
// j = 2 ,  2 > 0, 3 < 2 fasle
//  // j = 1 ,  1 > 0, 3 < 1 fasle
