class Node {
  constructor(val) {
    // When a node is created it's right left pointer are pointing to any other node 
    // so we set them to null. The val is set to the value passed to the constructor method
    // when instatiating a node with node class
    this.right = null;
    this.left = null;
    this.val = val;
  }
}

class BinarySearchTree {

  constructor() {
    // When we first create a binary search tree it doesn't have any node so we initalize the root node to null
    this.root = null;
  }

  // implenting insert instance method
  // We will pass a value to the insert method it will create a new node and insert it in the correct spot in the tree
  insert (val) {
    //create a new node
    let newNode = new Node(val);
    // check if there is a root node
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      // IF there is a root check if the value of the new node is greater than or less than the value of the root node
      let current = this.root;
      while (true) {
        if (val === current.val) return undefined;
        if (val < current.val) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else  if (val > current.val){
            if (current.right === null) {
              current.right = newNode;
              return this;
            } else {
              current = current.right;
            }
        }
      }
    }
  }

  // implementing find method
  // It finds a node if it exists it return true, if it doesn't it returns false
  find(val) {
    if (!this.root) {
      return false;
    } else if (this.root.val === val) {
      return true;
    } else {
      let current = this.root;
      while (true) {
        if (val < current.val) {
          if (current.left === null) {
            return false;
          } else if (current.left.val === val) {
            return true;
          } else {
            current = current.left;
          }
        } else if (val > current.val) {
            if (current.right === null) {
              return false;
            } else if (current.right.val === val) {
              return true;
            } else {
              current = current.right;
            }
          }
        }
      }
      
    }
    
    
    // implementing Breadth First Search method
    breadthFirstSearch () {
      let queue = [];
      // place the root node in the queue
      // create a variable called node and store the root node in it
      let node  = this.root;
      // add the root node into the queue
      queue.push(node);
      // Create a list to store the nodes that have been visited
      let visited  = [];
      // Create a loop that goes as long as there is anything in the queue
      while (queue.length !== 0) {
        // Dequeue a node from the queue and push it into the visited list 
        node = queue.shift();
        visited.push(node.val);
        // Check if there is a left property on the node dequeued, if it has 
        // add it to the queue
        if (node.left) {
          queue.push(node.left);
        }
        // Check if there is a right property on the node dequeued, if it has add it to the queue
        if (node.right) {
          queue.push(node.right);
        }
    
        
      }
      // return the visited list 
      return visited;
    
     }
    
     // implementing Depth First Search 
     // Implementing Preorder
     preOrderDepthFirstSeach() {
      // stores all the nodes that have been visited
      let visited = [];
      // stores the root node
      let current = this.root;
      //helper function that accepts a node as argument 
      function traverse(node) {
        visited.push(node.val);
        if (node.left) {
           traverse(node.left);
        }
        if (node.right) {
         traverse(node.right);
        }
      }
      traverse(current);
      return visited;
     }

     // implementing Post Order Depth First Search
     postOrderDepthFirstSearch () {
      let visited = [];
      let current = this.root;
      function traverse(node) {
        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right);
        visited.push(node.val);
      }
      traverse(current);
      return visited;
     } 

     // implemented In order for depth first search
     inorderDepthFirstSearch() {
      let current = this.root;
      let visited = [];
      function traverse(node) {
        if (node.left) traverse(node.left);
        visited.push(node.val);
        if (node.right) traverse(node.right);

      }
      traverse(current);
      return visited;
      
     }
    
    
  }
  
let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(3);
tree.insert(8);
tree.insert(15);
tree.insert(20);

// console.log(tree.find(21));
// console.log(tree);
// console.log(tree.preOrderDepthFirstSeach());
console.log(tree.inorderDepthFirstSearch());








