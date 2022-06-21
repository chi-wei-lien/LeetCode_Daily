/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let lpoint = 0;
    let rpoint = n;
    while (lpoint <= rpoint) {
        let mid = Math.floor((rpoint + lpoint) / 2);
        let result = guess(mid);
        if (result === 0) {
            return mid;
        }
        else if (result === -1) {
            rpoint = mid - 1;
        }
        else {
            lpoint = mid + 1;
        }
    }
    return lpoint;
};