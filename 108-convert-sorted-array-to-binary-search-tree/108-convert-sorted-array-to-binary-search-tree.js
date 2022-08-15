/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  if (nums.length === 0) return null;
  return recursive(nums, 0, nums.length - 1);
};

var recursive = function(nums, left, right) {
  if (left > right) {
    return null;
  }
  let mid = (left + right) / 2 | 0;
  let node = new TreeNode(nums[mid]);
  node.left = recursive(nums, left, mid - 1);
  node.right = recursive(nums, mid + 1, right);
  return node;
}