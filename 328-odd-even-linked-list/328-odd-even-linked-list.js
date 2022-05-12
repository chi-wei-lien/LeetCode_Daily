/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
    if (head === null) return null;
    let oddHead = head;
    let evenHead = head.next;
    let odd = oddHead;
    let even = evenHead;
    while (odd && even) {
        let nextOdd = null;
        let nextEven = null;
        if (odd.next) {
            nextOdd = odd.next.next;
            odd.next = nextOdd;
        }
        if (even.next) {
            nextEven = even.next.next;
            even.next = nextEven;
        }
        if (!odd.next) {
            odd.next = evenHead;
            break;
        }
        odd = nextOdd;
        even = nextEven;
    }
    if (odd) {
        odd.next = evenHead;
    }
    
    return oddHead;
};