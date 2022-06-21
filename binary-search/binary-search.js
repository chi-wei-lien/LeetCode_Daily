/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let lpoint = 0;
    let rpoint = nums.length - 1;
    
    while (lpoint <= rpoint) {
        let middle = Math.floor((lpoint + rpoint) / 2);
        if (nums[middle] === target) {
            return middle;
        }
        if (nums[middle] > target) {
            rpoint = middle - 1;
        }
        else if (nums[middle] < target) {
            lpoint = middle + 1;
        }
    }
    return -1;

};