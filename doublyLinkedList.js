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

  //implementing set instance method
  set(val, index) {
    if (index < 0 || index >= this.length) return null;
    let midpoint = this.length - 1 / 2;
    let counter, current;
    if (index < midpoint) {
      counter = 0;
      current = this.head;
      while (counter < index) {
        current = current.next;
        counter++;
      }
      current.val = val;
      return true;
    } else {
        counter = this.length - 1
        current = this.tail;
        while (counter > index) {
          current = current.prev;
          counter--;
        }
        current.val = val;
        return true;
    }
    return false;
  }

  // implementing insert instance method
  insert(val, index) {
    let newNode = new Node(val);
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);
    let current = this.get(index);
    let beforeNode = current.prev;
    newNode.next = beforeNode.next;
    current.prev = newNode;
    beforeNode.next = newNode;
    newNode.prev = beforeNode;
    this.length++;
    return this;
  }

  //implementing remove instance method
  remove (index) {
    if (index < 0 || index >= this.length) return null;
    if (index === 0) return !!this.shift();
    if (index === this.length - 1) return !!this.pop();

    let nodeToRemove = this.get(index);
    let beforeNode = nodeToRemove.prev;
    let afterNode = nodeToRemove.next;

    beforeNode.next = nodeToRemove.next;
    afterNode.prev = nodeToRemove.prev;

    nodeToRemove.next = null;
    nodeToRemove.prev = null;
    this.length--;

    return nodeToRemove;

  }

   // implementing reverse instance method
   reverse() {
    if (!this.head) return false;
    let current = this.head;
    // swap the head and tail
    this.head = this.tail;
    this.tail = current;
    // loop over the list
    for (let i = 0; i < this.length; i++) {
      //store the previous and next of current node
      let prev = current.prev;
      let next = current.next;
      // once we have stored the previous and next of the current node
      // we are going to use them e.g. swap the each nodes previous with next
      current.prev = next;
      current.next = prev;
      // at last move current one ahead
      current = next;
    }
    return this;
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
console.log(list.reverse());
console.log("****************************");
console.log(list.head);
console.log("****************************");
console.log(list.head.next);
console.log("****************************");
console.log(list.head.next.next)
console.log("****************************");
console.log(list.head.next.next.next);
console.log("****************************");
// console.log(list.get(4));
// // console.log(list.set(54, 3));
// console.log("***************************");
// console.log(list.get(3));

