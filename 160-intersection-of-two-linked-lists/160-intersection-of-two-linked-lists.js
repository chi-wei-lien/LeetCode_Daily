/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let a = headA;
    let b = headB;
    let again = false;
    while (true) {
        if (a == b) return a;
        a = a.next;
        b = b.next;
        if (a == null) {
            a = headB;
            if (again) {
                break;
            }
            again = true;
        }
        if (b == null) {
            b = headA;
        }
    }
    return null;
};