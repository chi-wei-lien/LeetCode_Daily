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
var reverseList = function(head) {
    return recur(head, null);
};

var recur = function(head, tail) {
    if (!head) return null;
    let nextNode = head.next;
    head.next = tail;
    if (!nextNode) {
        return head;
    }
    else {
        return recur(nextNode, head);
    }   
}