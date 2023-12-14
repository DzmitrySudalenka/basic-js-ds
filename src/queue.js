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
class Queue {

  constructor() {
    this.firstNode = null;
    this.lastNode = null;
  }

  getUnderlyingList() {
    return this.firstNode;
  }

  enqueue(value) {
    const newNode = new ListNode(value);

    if (this.firstNode) {
      this.lastNode.next = newNode;
      this.lastNode = newNode;
    } else {
      this.firstNode = newNode;
      this.lastNode = newNode;
    }
  }

  dequeue() {
    const firstNodeVal = this.firstNode.value;

    this.firstNode = this.firstNode.next;

    return firstNodeVal;
  }
}
const queue = new Queue();
queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);
queue.dequeue()
queue.dequeue()

module.exports = {
  Queue
};
