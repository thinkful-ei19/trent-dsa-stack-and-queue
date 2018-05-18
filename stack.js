'use strict';

class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next; 
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(data) {
    if (this.top === null) {
      this.top = new _Node(data, null);
      return;
    }
    this.top = new _Node(data, this.top);
  }

  pop() {
    const node = this.top;
    this.top = node.next;
    return node.data;
  }
}

function main() {
  const starTrek = new Stack();
  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('Mccoy');
  starTrek.push('Scotty');
  starTrek.pop();
  //   starTrek.pop();

  //   peek(starTrek);
  display(starTrek);

  

}

main();

function peek(list) {
  const node = list.top;
  console.log(node.data);
}

function display(list) {
  let node = list.top;
  while (node !== null) {
    console.log(node.data);
    node = node.next;
  }
}

function is_palindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  const stack = new Stack();
  for (let i = 0; i < s.length; i++) {
    stack.push(s[i]);
  }
  for (let i = 0; i < s.length; i++) {
    let currentLetter = stack.pop();
    if (currentLetter !== s[i]) {
      return false;
    }
  }
  return true; 
}

console.log(is_palindrome('dad'));