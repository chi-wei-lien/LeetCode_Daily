/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(target - nums[i])) {
            let complement = map.get(target - nums[i]);
            return [i, complement];
        }
        else {
            map.set(nums[i], i);
        }
    }
    return [];
};