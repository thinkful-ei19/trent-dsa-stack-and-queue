'use strict';

class _Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
} 

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(value) {
    const node = new _Node(value);
    if (this.first === null) {
      this.first = node;
    }
    if (this.last) {
      node.next = this.last;
      this.last.prev = node;
    }
    this.last = node;
  }

  dequeue() {
    if (this.first === null) {
      return;
    }

    const node = this.first;
    this.first = node.prev;

    if (node === this.last) {
      this.last = null;
    }

    return node.value;
  }
}


function main() {
  const starTrek = new Queue();
  starTrek.enqueue('Kirk');
  starTrek.enqueue('Spock');
  starTrek.enqueue('Mccoy');
  starTrek.enqueue('Scotty');
  starTrek.dequeue();
  display(starTrek);
  
}

main();

function peek(Q) {
  console.log(Q.first.value);
}

function display(Q) {
  let node = Q.first;
  while (node !== null) {
    console.log(node.value);
    node = node.prev;
  }
}

