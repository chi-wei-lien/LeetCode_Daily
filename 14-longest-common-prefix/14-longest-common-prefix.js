/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let index = 0;
    outer:
    while (true) {
        if (index >= strs[0].length) break;
        let common = strs[0].charAt(index);
        for (let i = 1; i < strs.length; i++) {
            if (index >= strs[i].length) break outer;
            if (strs[i].charAt(index) !== common) {
                break outer;
            }
        }
        index++;
    }
    return strs[0].substring(0, index);
};