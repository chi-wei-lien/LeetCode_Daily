/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function(head) {
    return recursiveFunc(head);
};

var recursiveFunc = function(head) {
    if (!head) {
        return null;
    }
    if (head.child) {
        let next = head.next;
        let child = recursiveFunc(head.child);
        head.next = child;
        child.prev = head;
        head.child = null;
        while (child.next) {
            child = child.next;
        }
        child.next = next;
        if (next) {
            next.prev = child;
        }
        
        return head;
    }
    
    let next = recursiveFunc(head.next);
    head.next = next;
    if (next) {
        next.prev = head;
    }
    return head;
}