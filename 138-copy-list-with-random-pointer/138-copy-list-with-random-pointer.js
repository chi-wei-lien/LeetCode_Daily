/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    if (!head) return null;
    let cur = head;
    let result = null;
    while (cur) {
        let nextNode = cur.next;
        let newNode = new Node(cur.val, cur.next, null);
        cur.next = newNode;
        cur = nextNode;
    }
    cur = head;
    let lastRandom = null;
    counter = 1;
    while (cur) {
        if (counter % 2 == 0) {
            cur.random = (lastRandom) ? lastRandom.next : null;
        }
        else {
            lastRandom = cur.random;
        }
        counter++;
        cur = cur.next;
    }
    cur = head;
    result = head.next;
    while (cur.next) {
        let thirdNode = cur.next.next;
        let nextNode = cur.next;
        cur.next = thirdNode;
        cur = nextNode;
    }
    
    return result;
};