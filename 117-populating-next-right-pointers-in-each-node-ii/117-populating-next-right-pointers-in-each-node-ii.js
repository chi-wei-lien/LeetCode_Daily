/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if (!root) return null;
    let data = [];
    let queue = [root];
    while (queue.length) {
        let levelSize = queue.length;
        for (let i = 0; i < levelSize; i++) {
            let node = queue.shift();
            data.push(node);
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
        data.push(null);
    }
    let newRoot = data[0];
    for (let i = 1; i < data.length; i++) {
        if (data[i - 1]) {
            data[i - 1].next = data[i];
        }   
    }
    return newRoot;
};