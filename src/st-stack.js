const { NotImplementedError } = require('../extensions/index.js');


module.exports = class Stack {
  constructor() {
    this.stack = [];
  }

  push(el) {
    this.stack.push(el);
  }

  pop() {
    let lastEl = this.stack[this.stack.length - 1];
    this.stack.splice(this.stack.length - 1, 1);
    return lastEl;
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }
}
