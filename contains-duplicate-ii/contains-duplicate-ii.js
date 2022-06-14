/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let cur = nums[i];
        if (map.has(cur)) {
            let lastIndex = map.get(cur);
            let distance = i - lastIndex;
            if (distance <= k) {
                return true;
            }
            map.set(cur, i);
        }
        else {
            map.set(cur, i);
        }
    }
    return false;
};