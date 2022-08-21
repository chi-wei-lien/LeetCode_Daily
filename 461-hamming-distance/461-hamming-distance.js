/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let fuse = x ^ y;
    let count = 0;
    for (let i = 0; i < 32; i++) {
        if (fuse >> i & 1) {
            count++;
        }
    }
    return count;
};