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

  // Implementing pop method
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

  // implementing shift instance method
  shift () {
    if (!this.head) return undefined;
    let current = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) { // if we remove all the nodes in the list, our tail property is still poinitng at the last node, so just in that case we will make it null
      this.tail = null;
    }
    return current;
  }

  // implementing Unshift instance method

  unshift (val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  // implementing get instance method
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let current = this.head;
    let counter = 0;
    for (let i = 0; i < index; i++) {
      current  = current.next
    }
    
    return current;
  }

  // implementing set method
  set (val, index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter < index) {
      current = current.next;
      counter++;
    }
    if (!current) {
      return false;
    } else {
      current.val = val;
      return true;
    }
  }

  // implementing insert method
  insert(val, index) {
    if (index < 0 || index > this.length) return fasle;
    if (index === this.length) return this.push(val);
    if (index === 0) return this.unshift(val);
    let newNode = new Node(val);
    let secondToSpecifiedNode = this.head;
    let current = this.head;
    let counter = 0;
    while (counter < index) {
      secondToSpecifiedNode = current;
      current = current.next;
      counter++;
    }
    newNode.next = secondToSpecifiedNode.next;
    secondToSpecifiedNode.next = newNode;
    this.length++;
    return true;


    
  }


}

// Create a new list
// This list is empty at the moment, it doesn't have any nodes
let list = new SinglyLinkedList();
// E.g. if we want to add some value to the end of the list, we will use the push() instance method
list.push(0);
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
//list.push(4);


// //console.log(`Popped: ${list.pop()}`);
// console.log("**********************************************");
// console.log(list);
// console.log(`Shifted once: ${list.shift()}`);
// console.log(list);
// console.log("**********************************************");
// console.log("**********************************************");
// console.log(list);
// console.log(`Shifted twice: ${list.shift()}`);
// console.log(list);
// console.log("**********************************************");
// console.log(list);
// console.log(`Shifted thrice: ${list.shift()}`);
// console.log(list);

// console.log(list.get(3));
// console.log(list.set(8, 0));
// console.log(list);greater 
console.log(list.insert(1.5, 2));
console.log(list.head);
console.log(list.head.next);
console.log(list.head.next.next);
console.log(list.head.next.next.next);
console.log(list.head.next.next.next.next);
