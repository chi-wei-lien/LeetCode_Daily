/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    return rec(rowIndex);
};

var rec = function(rowIndex) {
    if (rowIndex === 0) return [1];
    let ans = [];
    ans.push(1);
    let result = rec(rowIndex - 1);
    for (let i = 1; i < result.length; i++) {
        ans.push(result[i - 1] + result[i]);
    }
    ans.push(1);
    return ans;
}