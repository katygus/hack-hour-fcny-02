/**
 * Write a function that takes two parameters: an integer (k), and the head of a singly linked list.
 * This function should return the VALUE on the kth to last node in the list.
 *
 * const a = new Node('A');
 * const b = new Node('B');
 * const c = new Node('C');
 * const d = new Node('D');
 * const e = new Node('E');
 *
 * a.next = b;
 * b.next = c;
 * c.next = d;
 * d.next = e;
 *
 * Example:
 * kthToLastNode(2, a); // -> should return 'D' (the value on the second to last node)
 *
 * Additional info:
 * - Invalid inputs should return undefined
 * - When k is 1, the function should return the tail node.
 * - When k is the length/size of the linked list, the function should return the head node.
 */
// edge cases: input is 0, input is longer than total length of list (both undefined)
class Node<T> {
  value: T;
  next: Node<T> | null;

  constructor(val: T) {
    this.value = val;
    this.next = null;
  }
}
// to create map, 
const kthToLastNode = <T>(k: number, head: Node<T>): T | undefined => {
  if (k === 0) return undefined;
  let slow = head;
  let fast = head;
  let steps = 0;

// move fast pointer to k distance from slow
 for (let i = 1; i < k; i++) {
  fast = fast.next!;

  if (fast === null) return undefined;
  }
  while (fast.next !== null) {
    fast = fast.next;
    slow = slow.next!;
  }
  return slow.value;

  // const mappedList = new Map();

  // while (curr.next !== null); {
  // mappedList.set('curr.value', count);
  // count++;
  // curr = curr.next!;
  // }
  // console.log(mappedList);
  return undefined;
};

const a = new Node('A');
    const b = new Node('B');
    const c = new Node('C');
    const d = new Node('D');
    const e = new Node('E');

    a.next = b;
    b.next = c;
    c.next = d;
    d.next = e;

console.log(kthToLastNode(3, a));
// Don't delete the line below!
export { Node, kthToLastNode };
