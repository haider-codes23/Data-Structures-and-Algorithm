class MaxBinaryHeaps {
  constructor() {
    this.values = [];
  }

  //bubble Up method
  bubbleUp() {
    let index = this.values.length -1; // 5
    const element  = this.values[index]; // 55
    
    // E.g. if the index is less than 0 we dont want to make any swaps 
    while (index > 0) { // 2 > 0
      parentIndex = Math.floor((index - 1) / 2); // 2, 0 , -1
      parent = this.values[parentIndex];// 33 , 41 , undefined
      if (element <= parent) break; // 55 <= 33, 55 <= 41, 55 <= undefined
      this.values[parentIndex] = element;
      this.values[index]= parent;
      index = parentIndex; // index = 2, index = 0
    
         
    }
  }

  // implementing insert method
  insert (element) {
    this.values.push(element);
    this.bubbleUp();
  }
}

let heap = new MaxBinaryHeaps();
heap.insert(41);

heap.insert(39);
console.log(heap);
// [41, 39, 55, 18, 27, 12, 33];