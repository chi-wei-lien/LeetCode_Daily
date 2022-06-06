/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthGrammar = function(n, k) {
    return recur(n, k);
};

var recur = function(n, k) {
    if (n === 1 || k === 1) {
        return 0;
    }
    
    let length = Math.pow(2, n - 1);
    if (k <= length / 2) {
        return recur(n - 1, k);
    }
    return !recur(n - 1, k - length / 2);
}