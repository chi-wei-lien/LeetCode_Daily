/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    let lastNode = null;
    while (node.next) {
      if (!node.next.next) {
        lastNode = node;
      }
      console.log(node.val);
      node.val = node.next.val;
      console.log(node.next.val)
      node = node.next;
    }
    lastNode.next = null;
};