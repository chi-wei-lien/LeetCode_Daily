/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i]) && nums[i] * 2 === target) {
            return [map.get(nums[i]), i];
        }
        map.set(nums[i], i);
    }
    for (let i = 0; i < nums.length; i++) {
        if (map.has(target - nums[i])) {
            let complement = map.get(target - nums[i]);
            if (complement === i) {
                continue;
            }
            return [i, complement];
        }
    }
    return [];
};