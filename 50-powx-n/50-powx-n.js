/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if (n >= 0) {
        return recur(x, n);
    }
    return 1 / recur(x, -n);
};

var recur = function(x, n) {
    if (n === 0) {
        return 1;
    }
    
    if (n === 1) {
        return x;
    }
    
    let temp = myPow(x, Math.floor(n / 2));
    if (n % 2 === 0) {
        temp *= temp;
    }
    else {
        temp = temp * temp * x;
    }
    return temp;
}