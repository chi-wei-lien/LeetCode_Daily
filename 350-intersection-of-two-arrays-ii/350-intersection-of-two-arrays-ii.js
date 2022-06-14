/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let map = new Map();
    let result = [];
    for (let i = 0; i < nums1.length; i++) {
        let cur = nums1[i];
        if (map.has(cur)) {
            map.set(cur, map.get(cur) + 1);
        }
        else {
            map.set(cur, 1);
        }
    }
    for (let i = 0; i < nums2.length; i++) {
        let cur = nums2[i];
        if (map.has(cur)) {
            let cur_num = map.get(cur);
            result.push(cur);
            if (cur_num === 1) {
                map.delete(cur);
            }
            else {
                map.set(cur, cur_num - 1);
            }
        }
    }
    return result;
};