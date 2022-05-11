/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let index = 0;
    let n = nums.length;
    for (let i = 0; i < n; i++) {
        if (nums[i] != 0) {
            nums[index] = nums[i];
            index++;
        }
    }
    for (let i = index; i < n; i++) {
        nums[i] = 0;
    }
};