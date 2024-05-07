class MaxBinaryHeaps {
  constructor() {
    this.values = [55, 39, 41, 18, 27, 12, 33];
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

  // implementing extractMax that removes the max element from the heap
  extractMax () {
    [this.values[0], this.values[this.values.length - 1]] = [this.values[this.values.length - 1], this.values[0]];
    let length = this.values.length;
    let maxElement = this.values.pop();
    let parentIndex = 0;
    let parentElement  = this.values[parentIndex];
    while (true) {
      let swap = false;
      let leftChildIndex = 2 * (parentIndex) + 1;
      let leftChild;
      if (leftChildIndex < length){
        leftChild = this.values[leftChildIndex];
      }
     
  
      let rightChildIndex = 2 * (parentIndex) + 2;
      let rightChild;
      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
      }
  
      if (leftChild > parentElement && leftChild > rightChild) {
        [this.values[parentIndex], this.values[leftChildIndex]] = [this.values[leftChildIndex], this.values[parentIndex]];
        parentIndex = leftChildIndex;
        swap = true;
      } else if (rightChild > parentElement && rightChild > leftChild) {
        [this.values[parentIndex], this.values[rightChildIndex]] = [this.values[rightChildIndex], this.values[parentIndex]];
        parentIndex = rightChildIndex;
        swap = true;
      }
      if (swap === false) break; 

    }

    return maxElement;


    
  }
}

let heap = new MaxBinaryHeaps();
// heap.insert(41);

// heap.insert(39);
console.log(heap);
console.log("******************");
heap.extractMax();
console.log(heap);
// [41, 39, 55, 18, 27, 12, 33];