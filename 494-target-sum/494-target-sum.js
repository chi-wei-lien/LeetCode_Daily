/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    let result = helper(nums, target, 0, 0);
    return result;
};

var helper = function(nums, target, sum, i) {
    let result = 0;
    if (i === nums.length) {
        if (sum === target) {
            return 1;
        }
        return 0;
    }
    result += helper(nums, target, sum - nums[i], i + 1);
    result += helper(nums, target, sum + nums[i], i + 1);
    return result;
}