/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let rev = 0;
    let sign = 1;
    for (let i = 0; i < 32; i++) {
        let curr = n >> i;
        let last = curr & 1;
        if (i === 0 && last === 1) {
            sign = -1;
        }
        rev += sign * last << (31 - i)
    }
    if (sign === -1) return -rev;
    return rev;
};