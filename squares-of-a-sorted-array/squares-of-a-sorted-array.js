/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let result = new Array(nums.length);
    let i = 0;
    let n = nums.length - 1;
    let index = n;
    while (i <= n) {
        let val1 = nums[i] * nums[i];
        let val2 = nums[n] * nums[n];
        if (val1 > val2) {
            result[index] = val1;
            i++;
        }
        else {
            result[index] = val2;
            n--;
        }
        index--;
    }
    return result;
};