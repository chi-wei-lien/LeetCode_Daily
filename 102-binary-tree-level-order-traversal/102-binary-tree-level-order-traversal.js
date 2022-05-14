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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) return [];
    const result = [];
    const queue = [root];
    while (queue.length) {
        const levelResult = [];
        let levelSize = queue.length;
        for (let i = 0; i < levelSize; i++) {
            let data = queue.shift();
            levelResult.push(data.val);
            if (data.left) {
                queue.push(data.left);
            }
            if (data.right) {
                queue.push(data.right);
            }
        }
        result.push(levelResult);
    }
    return result;
};
