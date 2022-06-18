/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = new Map();
    let length = nums.length;
    let buckets = new Array(length);
    let result = [];
    for (let i = 0; i < length; i++) {
        buckets[i] = [];
    }
    
    for (let i = 0; i < length; i++) {
        if (map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1);
        }
        else {
            map.set(nums[i], 1);
        }
    }
    for (const [key, value] of map) {
        buckets[value - 1].push(key);
    }
    
    let count = 0;
    for (let i = length - 1; i >=0; i--) {
        if (count === k) return result;
        if (buckets[i].length) {
            result.push(...buckets[i]);
            count += buckets[i].length;
        }
    }
    return result;
};