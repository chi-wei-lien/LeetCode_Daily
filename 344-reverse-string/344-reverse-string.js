/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    recur(s, 0, s.length - 1);
    return s;
};

var recur = function(s, l, r) {
    if (l >= r) {
        return;
    }
    let temp = s[l];
    s[l] = s[r];
    s[r] = temp;
    recur(s, l + 1, r - 1);
}