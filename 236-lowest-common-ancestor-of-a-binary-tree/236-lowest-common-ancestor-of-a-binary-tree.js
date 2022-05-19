/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if ((!root) || (root == p) || (root == q)) return root;
    root.left = lowestCommonAncestor(root.left, p, q);
    root.right = lowestCommonAncestor(root.right, p, q);
    if (!root.left) {
        return root.right;
    } else if (!root.right) {
        return root.left;
    }
    return root;
};