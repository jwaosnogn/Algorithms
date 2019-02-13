/**
 * @example (status): not-attempted/attempted/completed-x-[optimized/nonoptimized]
 * x represents the number of times completed
 * optimized means you were able to optimize solution, non-optimized is usually the naive solution
 * 
 * @description (presenting)
 * add the above if you are presenting this hack hour
 * 
 * @description (status): not-attempted
 * @description senior-HH
 */


/* You have two numbers represented by linked lists. Each node contains a single digit. The digits
 * are stored in reverse order, such that the 1's digit is at the head of the list. Write
 * a function that adds the two numbers and returns the sum as a linked list with the same
 * structure.
 * EXAMPLE
 * Input: (2 -> 1 -> 5) + (5 -> 9 -> 2)
 * Output: 7 -> 0 -> 8
 *
 * The 7 is the ones digit (2 + 5).
 * The 0 is the tens digit (1 + 9, carry the 1).
 * The 8 is the hundreds digit (1 carried over + 5 + 2).
 *
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function addLinkedList(l1, l2) {
  let current1 = l1;
  let current2 = l2;
  const values = [];
  while (current1 || current2) {
    if (!current1) {
      current1 = new Node(0);
    }
    if (!current2) {
      current2 = new Node(0);
    }
    values.push(current1.value + current2.value);
    current1 = current1.next;
    current2 = current2.next;
  }
  for (let i = 0; i < values.length; i += 1) {
    if (values[i] >= 10) {
      values[i] -= 10;
      if (values[i + 1]) {
        values[i + 1] += 1;
      } else {
        values[i + 1] = 1;
      }
    }
    values[i] = new Node(values[i]);
  }
  for (let i = 0; i < values.length - 1; i += 1) {
    values[i].next = values[i + 1];
  }
  return values[0];
}

module.exports = {Node: Node, addLinkedList: addLinkedList};
