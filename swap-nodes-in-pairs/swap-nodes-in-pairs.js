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
var swapPairs = function(head) {
    if (!head) {
        return null;
    }
    let second = head.next;
    if (!second) return head;
    let third = second.next;
    let first = head;
    second.next = first;
    first.next = swapPairs(third);
    return second;
};