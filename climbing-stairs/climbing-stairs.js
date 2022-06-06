/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let map = new Map();
    return recur(n, map);
};

var recur = function(n, map) {
    if (n < 0) {
        return -1;
    }
    
    if (n === 0) {
        return 1;
    }
    
    if (map.has(n)) {
        return map.get(n);
    }
    
    let ways = 0;
    let oneStep = recur(n - 1, map);
    let twoStep = recur(n - 2, map);
    
    if (oneStep != -1) {
        ways += oneStep;
    }
    
    if (twoStep != -1) {
        ways += twoStep;
    }
    
    map.set(n, ways);
    return ways;
}