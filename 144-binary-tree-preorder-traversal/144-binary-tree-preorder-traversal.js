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

var recursiveFunc = function(root) {
    let number = [];
    if (!root) return number;
    
    number.push(root.val);
    number.push(...recursiveFunc(root.left));
    number.push(...recursiveFunc(root.right));
    return number;
}