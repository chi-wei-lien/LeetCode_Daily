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
    let map = new Map();
    return recur(1, n, map);
};

var recur = function(start, end, map) {
    let ans = [];
    if (start > end) {
        ans.push(null);
        return ans;
    }
    if (map.has([start, end])) {
        return map.get([start, end]);
    }
    for (let i = start; i <= end; i++) {
        let leftSubTree = recur(start, i - 1, map);
        let rightSubTree = recur(i + 1, end, map);
        for (const left of leftSubTree) {
            for (const right of rightSubTree) {
                let tempTree = new TreeNode(i, left, right);
                ans.push(tempTree);
            }
        }
    }
    map.set([start, end, ans])
    return ans;
}