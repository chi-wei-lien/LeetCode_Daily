/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    let temp = nums[i] + nums[i - 1];
    if (temp > nums[i]) nums[i] = temp;
    if (nums[i] > max) max = nums[i];
  }
  return max;
};