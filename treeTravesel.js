// implementing Breadth First Search
 // implementing Breadth First Search method
 function breadthFirstSearch (tree) {
  let queue = [];
  // place the root node in the queue
  // create a variable called node and store the root node in it
  let node  = this.root;
  queue.push(node);
  // Create a list to store the nodes that have been visited
  let visited  = [];
  // Create a loop that goes as long as there is anything in the queue
  while (queue.legnth !== 0) {
    // Dequeue a node from the queue and push it into the visited list 
    node = queue.shift();
    visited.push(node);
    // Check if there is a left property on the node dequeued, if it has 
    // add it to the queue
    if (node.left) {
      queue.push(node.left);
    }
    // Check if there is a right property on the node dequeued, if it has add it to the queue
    if (node.right) {
      queue.push(node.right);
    }

    // return the visited list 
    return visited;

  }

 }