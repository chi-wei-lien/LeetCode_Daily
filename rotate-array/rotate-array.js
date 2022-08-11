/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k = k % nums.length;
    if (k === 0) {
        return nums;
    }
    let ans = new Array(nums.length);
    let index = 0;
    for (let i = nums.length - k; i < nums.length; i++) {
        ans[index] = nums[i];
        index++;
    }
    for (let i = 0; i < nums.length - k; i++) {
        ans[index] = nums[i];
        index++;
    }
    for (let i = 0; i < nums.length; i++) {
        nums[i] = ans[i];
    }
};