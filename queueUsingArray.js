let queue = [];

// add to the end of a queue [1, 2, 3, 4, 5] the first element added was 1
// then 2 then 3 then 4 then 5 
queue.push(1);
queue.push(2);
queue.push(3);
queue.push(4);
queue.push(5);

// so when removing from we need to abide by the FIFO principle e.g. First 
//In First Out so we need to remove from the beginning
// if we used the pop method we would be removing the last element added first,
// we dont want to do that, instead we would use shift method
// which removes the first element from the array
// Using shift() method has a draw back we are removing from the beginning which 
//requires reindexing all the element in the array which increases the
// time complexity and is very inefficient as well
// console.log(queue.unshift());

// Another way to implement a Queue is to use unshift for adding elements e.g.
// we will be adding elements to the beginning 

let anotherQueue = [];
anotherQueue.unshift(1);
anotherQueue.unshift(2);
anotherQueue.unshift(3);[3, 2, 1] // Now the element is added to the beginning 
//and each time an element is added all the elements require reindexing which 
// again is inefficient

// Now the first element added has been moved to the end of the array so the remove
// we need to remove we have to start removing from the end for which we 
// use pop() method 
console.log(anotherQueue);



