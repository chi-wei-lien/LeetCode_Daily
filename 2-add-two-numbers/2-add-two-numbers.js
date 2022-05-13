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
    return recursiveFunc(l1, l2, 0) 
};

var recursiveFunc = function(l1, l2, carry) {
    if (!l1 && !l2 && (carry === 0)) return null;
    let sum = carry;
    if (l1) {
        sum += l1.val; 
        l1 = l1.next;
    }
    if (l2) {
        sum += l2.val;
        l2 = l2.next;
    }
    carry = (sum >= 10) ? 1 : 0;
    let node = new ListNode(sum % 10, recursiveFunc(l1, l2, carry));
    return node;
}