/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x === 1) return 1;
    let lpoint = 0;
    let rpoint = Math.floor(x / 2);
    // let rpoint = x;
    let last = 0;
    while (lpoint <= rpoint) {
        let mid = Math.floor((rpoint + lpoint) / 2);
        let pow = mid * mid;
        if (pow === x) {
            return mid;
        }
        if (pow < x) {
            last = mid;
            lpoint = mid + 1;
        }
        else if (pow > x) {
            rpoint = mid - 1;
        }
    }
    return last;
};