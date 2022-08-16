/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.nums = nums;
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    return this.nums;
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    let ans = [];
    for (let i = 0; i < this.nums.length; i++) {
        ans.push(this.nums[i]);
    }
    for (let i = 0; i < ans.length; i++) {
        let randIndex = Math.random() * ans.length | 0;
        let temp = ans[i];
        ans[i] = ans[randIndex];
        ans[randIndex] = temp;
    }
    return ans;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */