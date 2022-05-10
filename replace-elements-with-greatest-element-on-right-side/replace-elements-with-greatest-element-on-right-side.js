/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let big = arr[i + 1];
        for (let j = i + 2; j < n; j++) {
            if (arr[j] > big) {
                big = arr[j];
            }
        }
        arr[i] = big;
    }
    arr[n - 1] = -1;
    return arr;
};