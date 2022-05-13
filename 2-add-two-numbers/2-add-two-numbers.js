/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    if (!l1) return l2;
    if (!l2) return l1;
    if (!l1 && !l2) return null;
    
    let dummyHead = new ListNode(-1, null);
    let dummy = dummyHead;
    let sum = 0;
    let carry = 0;
    
    while (l1 && l2) {
        sum = l1.val + l2.val + carry;
        carry = (sum >= 10) ? 1 : 0;
        sum %= 10;
        dummy.next = new ListNode(sum, null);
        l1 = l1.next;
        l2 = l2.next;
        dummy = dummy.next;
    }
    
    while (l1) {
        sum = l1.val + carry;
        carry = (sum >= 10) ? 1 : 0;
        sum %= 10;
        dummy.next = new ListNode(sum, null);
        l1 = l1.next;
        dummy = dummy.next;
    }
    
    while (l2) {
        sum = l2.val + carry;
        carry = (sum >= 10) ? 1 : 0;
        sum %= 10;
        dummy.next = new ListNode(sum, null);
        l2 = l2.next;
        dummy = dummy.next;
    }
    
    if (carry === 1) {
        dummy.next = new ListNode(1, null);
    }
    
    return dummyHead.next;
};