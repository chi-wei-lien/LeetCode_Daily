/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (!head) return null;
    let length = 0;
    let cur = head;
    while (cur) {
        length++;
        cur = cur.next;
    }
    if (length === 1 || k === 0) return head;
    cur = head;
    if (k % length === 0 && k != 1) return head
    for (let i = 0; i < length - (k % length  + 1); i++) {
        cur = cur.next;
    }
    let newHead = cur.next;
    let temp = newHead;
    cur.next = null;
    while (temp.next) {
        temp = temp.next;
    }
    temp.next = head;
    head = newHead;
    return head;
};