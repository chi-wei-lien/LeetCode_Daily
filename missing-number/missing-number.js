/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let check = new Array(nums.length).fill(false);
    for (let i = 0; i < nums.length; i++) {
        check[nums[i]] = true;
    }
    for (let i = 0; i < check.length; i++) {
        if (check[i] === false) return i;
    }
    return check.length;
};