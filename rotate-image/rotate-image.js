/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  for (let i = 0; i < matrix.length; i++) {
      for (let j = i; j < matrix.length; j++) {
          swap(matrix, i, j);
      }
  }
  flip(matrix);
};

var swap = function(matrix, i , j) {
  let temp = matrix[i][j];
  matrix[i][j] = matrix[j][i];
  matrix[j][i] = temp;
}

var flip = function(matrix) {
  let start = 0;
  let end = matrix.length - 1;
  while (start < end) {
    for (let i = 0; i < matrix.length; i++) {
      let temp = matrix[i][start];
      matrix[i][start] = matrix[i][end];
      matrix[i][end] = temp;
    }
    start++;
    end--;
  }
}
