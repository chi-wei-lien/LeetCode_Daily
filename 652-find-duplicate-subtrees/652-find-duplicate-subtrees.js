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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function(root) {
    let map = new Map();
    let ans = [];
    if (!root) return ans;
    helper(root, map, ans);
    return ans;
};

var helper = function(root, map, ans) {
    if (!root) {
        return "#";
    }
    let code = root.val + "-" + helper(root.left, map, ans) + "-" + helper(root.right, map, ans);
    if (map.has(code)) {
        let curNum = map.get(code) + 1;
        map.set(code, curNum);
        if (curNum == 2) ans.push(root);
    }
    else {
        map.set(code, 1);
    }
    return code;
}
