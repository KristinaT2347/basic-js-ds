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
    this.first = null;
    this.last = null;
  }

  getUnderlyingList() {
    return this.first;
  }

  enqueue(value) {
    const node = new ListNode(value);

    if (!this.first) {
      this.first = node;
    } else {
      if (!this.last) {
        this.first.next = node;
        this.last = node;
      }

      this.last.next = node;
      this.last = node;
    }
  }

  dequeue() {
    if (!this.first) {
      return;
    }

    const top = this.first;

    if (this.first === this.last) {
      this.last = null;
    }

    this.first = this.first.next;
    return top.value;
  }
}

module.exports = {
  Queue,
};
