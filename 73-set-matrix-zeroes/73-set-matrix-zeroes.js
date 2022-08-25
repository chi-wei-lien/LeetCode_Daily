/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let col1 = 1;
    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i][0] === 0) col1 = 0;
        for (let j = 1; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }
    
    for (let i = matrix.length - 1; i >= 0; i--) {
        for (let j = matrix[0].length - 1; j >= 1; j--) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
        if (col1 === 0) matrix[i][0] = 0;
    }
};