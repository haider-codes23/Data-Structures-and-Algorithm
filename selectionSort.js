function selectionSort (arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minimum = i;
    for (let j = minimum; j < arr.length - 1; j++) {
      console.log("Before: ",arr, arr[minimum], arr[j + 1])
      if (arr[j + 1] < arr[minimum]) {
        minimum = j + 1;
        
      }
      console.log(`minimum: ${arr[minimum]}`);
      

    }
    console.log(`${i + 1} pass done`);
    if (arr[minimum] !== arr[i]) {
      console.log("SWAPPING!!!!");
      [arr[i], arr[minimum]] = [arr[minimum], arr[i]];
    }
    console.log("After swaping: ",arr)
    console.log("******************************************")

  }
  return arr;
}
console.log(selectionSort([1, 3, 4, 1, 2]));