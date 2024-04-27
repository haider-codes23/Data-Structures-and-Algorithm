// Node contains a piece of data
// And it contains reference to the next node
class Node {
  constructor(val) {
    // When we create the first node, it contains a val and because it is the only 
    // Node in the list, the next part is not pointing at anything, so we initialize 
    // it with null
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  // A singly linked list contain a pointer to the head of the list and a pointer to the tail as well
  // First time a list is created, it's head and tail property will be equal to null, and the the length will be equal to 0
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  // Instance method to add a new value to the end of the list
  push(val) {
    //It firstly creates a new node using the value passed to the function
    let newNode = new Node(val);
    // Then check if there is no head property on the list, if there isn't any(meaning it is an empty list), then set the head
    // and tail to be the newly created node
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } 
    // If the list already has some nodes, then set the next property of tail to newNode and set the tail property on the list to be the new node
    else {
      this.tail.next = newNode;
      this.tail = newNode;

    }
    // Increment length by 1
    this.length++;
    // And return the linked list
    return this;
  }
}

// Create a new list
// This list is empty at the moment, it doesn't have any nodes
let list = new SinglyLinkedList();
// E.g. if we want to add some value to the end of the list, we will use the push() instance method
list.push("Hi");
list.push("Haider");
console.log(list);
//list.push(10);