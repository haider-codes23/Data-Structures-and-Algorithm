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
}