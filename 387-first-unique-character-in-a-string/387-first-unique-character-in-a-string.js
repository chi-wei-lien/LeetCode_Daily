/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let map = new Map();
    for (let i = 0; i < s.length; i++) {
        let cur = s.charAt(i);
        if (map.has(cur)) {
            map.set(cur, map.get(cur) + 1);
        }
        else {
            map.set(cur, 0);
        }
    }

    for (let i = 0; i < s.length; i++) {
        let cur = s.charAt(i);
        if (map.get(cur) === 0) {
            return i;
        }
    }
    return -1;
};