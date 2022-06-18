/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (s.length === 0) return 0;
    let result = 1;
    let lpoint = 0;
    let map = new Map();
    map.set(s[0], 0);
    for (let i = 1; i < s.length; i++) {
        let lvalue = s[lpoint];
        let rvalue = s[i];
        if (map.has(rvalue)) {
            let last = map.get(rvalue) + 1;
            if (last > lpoint) {
                lpoint = last;
            }
        }
        let curString = s.substring(lpoint, i + 1);
        let newLength = curString.length;
        if (newLength > result) {
            result = newLength;
        }
        map.set(rvalue, i);
    }
    return result;
};