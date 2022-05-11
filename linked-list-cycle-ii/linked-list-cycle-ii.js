/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    if (head == null || head.next == null) return null;
    let slow = head;
    let fast = head;
    while (slow != null && fast != null) {
        slow = slow.next;
        if (!fast.next) {
            return null;
        }
        fast = fast.next.next;
        if (slow == fast) break;
    }
    if (slow == null || fast == null) return null;
    slow = head;
    while (fast != slow) {
        slow = slow.next;
        fast = fast.next;
    }
    return slow;
};