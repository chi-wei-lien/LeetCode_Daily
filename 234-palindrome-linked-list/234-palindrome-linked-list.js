/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

let cur;
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    cur = head;
    return recursiveFunc(head);
};

var recursiveFunc = function(head) {
    if (!head) return true;
    
    let result = recursiveFunc(head.next);
    if (head.val === cur.val) {
        cur = cur.next;
        return result;
    }
    return false;
}