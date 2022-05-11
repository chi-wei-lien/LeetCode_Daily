/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    let correct = heights.slice(0);
    let result = 0;
    correct.sort(function compare(a, b) {
        return a - b;
    })
    for (let i = 0; i < heights.length; i++) {
        if (correct[i] != heights[i]) {
            result++;
        }
    }
    return result;
};