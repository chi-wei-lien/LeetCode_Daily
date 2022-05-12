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
    if (head === null) return null;
    let cur = head;
    let nextNextNode = null;
    if (cur.next) {
        nextNextNode = cur.next.next;
    }
    else {
        return cur;
    }
    let nextNode = cur.next;
    let tempCur = nextNode;
    cur.next.next = cur;
    cur.next = null;
    cur = tempCur;
    while (nextNextNode) { 
        let tempNextNode = nextNextNode;
        let tempNextNextNode = nextNextNode.next;
        cur = nextNextNode;
        nextNextNode.next = nextNode;
        nextNextNode = tempNextNextNode;
        nextNode = tempNextNode;
    }
    return cur;
};