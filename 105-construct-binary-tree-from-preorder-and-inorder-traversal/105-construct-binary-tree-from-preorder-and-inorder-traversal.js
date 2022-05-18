/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if (!preorder.length || !inorder.length) return null;
    let rootValue = preorder.shift();
    let index = inorder.indexOf(rootValue);
    let leftPreorder = preorder.slice(0, index);
    let leftInorder = inorder.slice(0, index);
    let rightPreorder = preorder.slice(index);
    let rightInorder = inorder.slice(index + 1);
    return new TreeNode(rootValue, buildTree(leftPreorder, leftInorder), buildTree(rightPreorder, rightInorder));
};