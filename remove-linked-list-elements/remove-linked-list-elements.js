/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let cur = head;
    if (cur === null) return null;
    while (cur) {
        if (cur.val === val) {
            head = head.next;
        }
        else {
            break;
        }
        cur = cur.next;
    }
    
    while (cur) {
        let nextNode = null;
        if (cur.next === null) break;
        if (cur.next.val === val) {
            cur.next = cur.next.next;
            nextNode = cur;
        }
        else {
            nextNode = cur.next;
        }
        cur = nextNode;
    }
    return head;
};