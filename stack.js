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
    //if the top of the stack is empty, then the data will be the
    //top of the stack
    if (this.top === null) {
      this.top = new _Node(data, null);
      return this.top;
    }

    //if the top already has something then create a new node
    //add data to the new node
    // have the pointer point to the top 
    const node = new _Node(data, this.top);
    this.top = node;
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
  //   display(starTrek);
  const stack = new Stack();
  stack.push(5);
  stack.push(4);
  stack.push(6);
  //   stack.pop();
//   sortStack(stack);
//   display(stack);

  

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

// O(n)
// console.log(is_palindrome('dad'));

function matching(str) {
  const openStack = new Stack();
  const closedStack = new Stack();
  let openParens = 0;
  let closedParens = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') {
      openStack.push(i);
      openParens++;
    }
    else if (str[i] === ')') {
      closedStack.push(i);
      closedParens++;
    }
  }
  if (openParens === closedParens) {
    return true;
  }
  else if (openParens > closedParens) {
    const position = openStack.pop();
    return `Error - open paren at: ${position}`;
  }
  else if (openParens < closedParens) {
    const position = closedStack.pop();
    return `Error - closed paren at: ${position}`;
  }
}

// function matching(str) {
//   const parensStack = new Stack();
//   let isOpenParen = true;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === '(') {
//       parensStack.push(i);
//     }
//     else if (str[i] === ')') {
//       parensStack.pop();
//     }
//   }
//   console.log(parensStack);
//   if (parensStack.top === null) {
//     return true;
//   }
//   else if (isOpenParen) {
//     for () {

//     }
//   }
// }

// console.log(matching('(5 + (4 - 2'));

// function sortStack(stack) {
//   let topLevelNode = stack.top; 
//   let lowerlevelNode = stack.top.next;
//   let resultStack = new Stack();
//   let currentGreatest = stack.pop();
//   while (topLevelNode !== null) {
//     // console.log(topLevelNode);
//     while (lowerlevelNode !== null) {
//       let currentEval = stack.pop();
//       console.log(currentEval);
//       if (currentEval > currentGreatest) {
//         currentGreatest = currentEval;
//       }
//       lowerlevelNode = lowerlevelNode.next;
//     //   console.log(lowerlevelNode);
//     }
//     resultStack.push(currentGreatest);
//     topLevelNode = topLevelNode.next;
//   }
//   return resultStack;
// }

function sortStack(stack){
  let holder = new Stack();
  while (stack.top) {
    let num = stack.pop();
    while(holder.top && peek(holder) > num) {
      stack.push(holder.pop());
    }
    holder.push(num);
  }
  // while loop through original 
  //compare while loop 
  // pushing into stack
  return holder;
}
let stack = new Stack();
stack.push(1);
stack.push(9);
stack.push(6);
console.log(JSON.stringify(sortStack(stack)));

