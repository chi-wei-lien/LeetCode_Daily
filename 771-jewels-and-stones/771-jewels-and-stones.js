/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let set = new Set();
    let result = 0;
    for (let i = 0; i < jewels.length; i++) {
        if (!set.has(jewels[i])) {
            set.add(jewels[i], 0);
        }
    }
    for (let i = 0; i < stones.length; i++) {
        if (set.has(stones[i])) {
            result++;
        }
    }
    return result;
};