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

  // Implementing traverse method
  //
  pop() {
    // Firstly check if the list is empty or not
    if (!this.head) {
      return undefined;
    }
    // Otherwise loop through the nodes in the list till you reach the tail node
    // We start by creating a variable called current and assign it the head Node
    // Then we create another variable called secondToLastNode and assign it the head node
    // At the start both current and secondToLastNode will be pointing at the head Node
    // Then we will loop through and move current one up and check if it is the end of the list
    // If it's not we are going to move the secondToLastNode one up as well
    // Then we are going to move current one up again and check if now we have reached the end of the list
    // if we have reached the end of list we dont move secondToLastNode
    // Then we are going to remove the node at the current node 
    // And make our secondToLastNode our new tail
    // The loop will keep looping until current is not null e.g. when it has reached last node
    let current = this.head;
    let secondToLastNode = current;
    while(current.next) { // while there is a next, it will stop looping when next is null
      secondToLastNode = current;
      current = current.next;
    }
    this.tail = secondToLastNode;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
      
    }
    return current;
  }
}

// Create a new list
// This list is empty at the moment, it doesn't have any nodes
let list = new SinglyLinkedList();
// E.g. if we want to add some value to the end of the list, we will use the push() instance method
list.push("Hi");
list.push("Haider");
list.push("Ibraheem");
list.push("Yusuf");
list.push("Musa");

console.log(`Popped: ${list.pop()}`);
console.log(list);