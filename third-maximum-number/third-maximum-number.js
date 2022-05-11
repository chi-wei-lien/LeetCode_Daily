/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let n = nums.length;
    
    let counter = 0;
    
    if (n === 1) return nums[0];
    
    nums.sort(function compare(a, b) {
        return a - b;
    })
    
    let prev = nums[n - 1];
    
    for (let i = n - 2; i >= 0; i--) {
        if (nums[i] != prev) {
            counter++;
            if (counter === 2) {
                return nums[i];
            }
        }
        prev = nums[i];
    }
    return nums[n - 1];
    
};