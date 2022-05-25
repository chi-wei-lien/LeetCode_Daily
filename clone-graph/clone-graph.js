/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    let visited = new Map();
    return helper(node, visited);
};

var helper = function(node, visited) {
    if (!node) return null;
    let newNode = new Node(node.val);
    visited.set(newNode.val, newNode);
    let neighbors = [];
    for (let i = 0; i < node.neighbors.length; i++) {
        if (!visited.get(node.neighbors[i].val)) {
            visited.set(newNode.val, newNode);
            neighbors.push(helper(node.neighbors[i], visited));
        } else {
            neighbors.push(visited.get(node.neighbors[i].val));
        }
    }
    newNode.neighbors = neighbors;
    return newNode;
}