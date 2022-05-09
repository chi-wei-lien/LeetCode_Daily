/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let index = 1;
    let last = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] != last) {
            nums[index] = nums[i];
            index++;
        }
        last = nums[i];
    }
    return index;
};