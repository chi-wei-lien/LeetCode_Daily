/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let ans = [];
    let set = new Set();
    for (let i = 0; i < nums1.length; i++) {
        let cur = nums1[i];
        if (set.has(cur)) {
            continue;
        }
        set.add(cur);
    }
    for (let i = 0; i < nums2.length; i++) {
        let cur = nums2[i];
        if (set.has(cur)) {
            ans.push(cur);
            set.delete(cur);
        }
    }
    return ans;
};