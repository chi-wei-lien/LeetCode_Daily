/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums.length === 1) return nums[0];
    if (nums[1] < nums[0]) nums[1] = nums[0];
    for (let i = 2; i < nums.length; i++) {
        let cur = nums[i];
        if ((cur + nums[i - 2]) > nums[i - 1]) {
            let temp = nums[i - 1];
            nums[i] = cur + nums[i - 2];
            nums[i - 1] = temp;
        } else {
            nums[i] = nums[i - 1];
        }
    }
    console.log(nums);
    return nums[nums.length - 1] > nums[nums.length - 2] ? nums[nums.length - 1] : nums[nums.length - 2];
};
