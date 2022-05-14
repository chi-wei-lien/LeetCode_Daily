/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

var preorderTraversal = function(root) {
    return recursiveFunc(root);
};

var recursiveFunc = function(root, array = []) {
    if (!root) return [];
    
    array.push(root.val);
    recursiveFunc(root.left, array);
    recursiveFunc(root.right, array);
    return array;
}