/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let layers = [];
    helper(numRows, layers);
    return layers
};

var helper = function(numRows, layers) {
    if (numRows === 1) {
        layers.push([1]);
        return [1];
    }
    let prev = helper(numRows - 1, layers);
    let curr = [];
    curr.push(1);
    for (let i = 0; i < prev.length - 1; i++) {
        curr.push(prev[i] + prev[i + 1]);
    }
    curr.push(1);
    layers.push(curr);
    return curr;
}