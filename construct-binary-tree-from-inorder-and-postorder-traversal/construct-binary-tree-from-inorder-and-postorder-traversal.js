/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    if (!inorder.length || !postorder.length) {
        return null;
    }
    var val = postorder.pop();
    var index = inorder.indexOf(val);
    var root = new TreeNode(val);
    root.right = buildTree(inorder.slice(index+1, inorder.length), postorder);
    root.left = buildTree(inorder.slice(0, index), postorder);
    return root;
};