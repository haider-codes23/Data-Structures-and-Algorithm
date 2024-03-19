function linearSearch (arr, val) {
  for(let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {              
      return i;
    }
    
  }
  return -1;
} 
// Whats the time complexity of this algorithm ?
// The time complexity is the the lenght of the loop, so the best case sceniro is O(1) e.g if the element we are looking for is the first element 
// but the worst case sceniro is O(N) that is as the numbers of elements in the array increase the number of operation will increase thus the runtime will increase
console.log(linearSearch([1, 2, 3, 4, 4, 7, 56, 87, 76], 87));