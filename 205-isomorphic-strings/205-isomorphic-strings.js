/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let map1 = new Map();
    let map2 = new Map();
    let sLength = s.length;
    let tLength = t.length;
    if (sLength != tLength) return false;
    for (let i = 0; i < sLength; i++) {
        if (map1.has(s.charAt(i))) {
            if (map1.get(s.charAt(i)) != t.charAt(i)) return false;
        }
        else {
            map1.set(s.charAt(i), t.charAt(i));
        }
        if (map2.has(t.charAt(i))) {
            if (map2.get(t.charAt(i)) != s.charAt(i)) return false;
        }
        else {
            map2.set(t.charAt(i), s.charAt(i));
        }
    }
    return true;
};