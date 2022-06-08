/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    return recur(1, n);
};

var recur = function(start, end) {
    let ans = [];
    if (start > end) {
        ans.push(null);
        return ans;
    }
    for (let i = start; i <= end; i++) {
        let leftSubTree = recur(start, i - 1);
        let rightSubTree = recur(i + 1, end);
        for (const left of leftSubTree) {
            for (const right of rightSubTree) {
                let tempTree = new TreeNode(i, left, right);
                ans.push(tempTree);
            }
        }
    }
    return ans;
}