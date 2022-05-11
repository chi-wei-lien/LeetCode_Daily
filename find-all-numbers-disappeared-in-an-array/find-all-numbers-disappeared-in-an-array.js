/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    const ordered = new Array(nums.length);
    const ans = [];
    for (let i = 0; i < nums.length; i++) {
        ordered[nums[i] - 1] = 1;
    }
    for (let i = 0; i < ordered.length; i++) {
        if (ordered[i] != 1) {
            ans.push(i + 1);
        }
    }
    return ans;
    
};