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
let number = [];

var preorderTraversal = function(root) {
    number = [];
    recursiveFunc(root);
    return number;
};

var recursiveFunc = function(root) {
    if (!root) return null;
    number.push(root.val);
    recursiveFunc(root.left);
    recursiveFunc(root.right);
}