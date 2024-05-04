class Node {
  constructor(val) {
    // When we create the first node, it contains a val and because it is the only 
    // Node in the list, the next part is not pointing at anything, so we initialize 
    // it with null
    this.val = val;
    this.next = null;
  }
}

class Stack {
  // A singly linked list contain a pointer to the head of the list and a pointer to the tail as well
  // First time a list is created, it's head and tail property will be equal to null, and the the length will be equal to 0
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Adding to our stack
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail= newNode;
    } else {
      let current = this.head;
      this.head = newNode;
      this.head.next = current;

    }
    this.length++;
    return this.length;
  }

  // removing from our stack
  pop() {
    if (!this.head) return null;
    let nodeToBeRemoved = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = nodeToBeRemoved.next;
    }
    this.length--;
    return nodeToBeRemoved.val;
  }

}

let stack = new Stack();
stack.push(1);
// stack.push(2);
// stack.push(3);
console.log(stack);

console.log(stack.pop());
console.log(stack);
// console.log(stack.pop());
// console.log(stack.pop());