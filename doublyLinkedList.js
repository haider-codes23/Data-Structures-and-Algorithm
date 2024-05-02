class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  // implementing push instance method
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  // implementing pop instance methods
  pop() {
    if (!this.head) {
      return undefined;
    }
    let poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev =null;

    }
    this.length--;
    return poppedNode;
  }

  // implementing shift method
  shift() {
    if (this.length === 0) return undefined;
    let removedNode = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail =null;
    } else {
      this.head = removedNode.next;
      removedNode.next = null;
      this.head.prev = null;
    }
    this.length--;
    return removedNode;
  }

  // implementing unshift method
  unshift(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let oldHead = this.head;
      this.head = newNode;
      newNode.next = oldHead;
      oldHead.prev = newNode;

    }
    this.length++;
    return this;
  }

  // implementing get method 
  get (index) {
    if (index < 0 || index >= this.length ) return null;
    let midPoint = (this.length - 1) / 2
    let counter;
    let current;

    if (index < midPoint){
      counter = 0
      current = this.head;
      while (counter < index) {
        current = current.next;
        counter++;
      }
    } else {
      counter = this.length - 1;  
      current = this.tail;
      while(counter > index) {
        current = current.prev;
        counter--;
      }
    }
    return current;
  }




}

let list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3);//
list.push(4);
list.push(5);
// console.log("****************************");
// console.log(list.unshift(0));
// console.log("****************************");
// console.log(list.head);
// console.log("****************************");
// console.log(list.head.next.next);
// console.log("****************************");
// console.log(list.head.next.next.next)
// console.log("****************************");
// console.log(list.head.next.next.next.next);
// console.log("****************************");
console.log(list.get(4));

