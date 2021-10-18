const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
module.exports = class Queue {
  constructor() {
    this.head = null;
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue(x) {
    let node = new ListNode(x);
    if (this.head === null) {
      this.head = node;
    } else {
      let lastNode = this.head;
      while (lastNode.next) {
        lastNode = lastNode.next;
      }
      lastNode.next = node;
    }
  }

  dequeue() {
    let currentNode = this.head;
    if (currentNode.next) {
      this.head = currentNode.next || null;
    }
    return currentNode.value;
  }

}
