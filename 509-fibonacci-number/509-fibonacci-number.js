/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    let map = new Map();
    return recur(n, map);
};

var recur = function(n, map) {
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    if (map.get(n) !== undefined) {
        return map.get(n);
    }
    let result = recur(n - 1, map) + recur(n - 2, map);
    map.set(n, result);
    return result;
}