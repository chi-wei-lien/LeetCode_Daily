/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function(nums1, nums2, nums3, nums4) {
    let map = new Map();
    let result = 0;
    let length = nums1.length;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            let sum = nums1[i] + nums2[j];
            if (map.has(sum)) {
                let curValue = map.get(sum);
                map.set(sum, curValue + 1);
            }
            else {
                map.set(sum, 1);
            }
        }
    }
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            let sum = nums3[i] + nums4[j];
            if (map.has(-sum)) {
                result += map.get(-sum);
            }
        }
    }
    return result;
};