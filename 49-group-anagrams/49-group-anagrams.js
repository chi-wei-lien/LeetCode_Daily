/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = new Map();
    let result = [];
    for (let i = 0; i < strs.length; i++) {
        let cur = strs[i];
        let sortCur = sortStr(cur);
        if (map.has(sortCur)) {
            let curGroup = map.get(sortCur);
            curGroup.push(cur)
            map.set(sortCur, curGroup);
        }
        else {
            map.set(sortCur, [cur]);
        }
    }
    for (const [key, value] of map) {
        result.push(value);
    }
    return result;
};

var sortStr = function(str) {
    return str.split('').sort().join();
}