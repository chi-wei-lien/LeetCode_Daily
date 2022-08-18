/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    let power = Math.log(n) / Math.log(3) | 0;
    return Math.pow(3, power) === n;
};