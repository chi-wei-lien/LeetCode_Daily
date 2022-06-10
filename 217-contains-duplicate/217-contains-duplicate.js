/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let set = new Set();
    for (let i = 0; i < nums.length; i++) {
        let cur = nums[i];
        if (set.has(cur)) {
            return true;
        }
        set.add(cur);
    }
    return false;
};