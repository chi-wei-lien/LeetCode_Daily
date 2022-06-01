/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    let stack = [[sr, sc]];
    let originalColor = image[sr][sc];
    if (originalColor === newColor) {
        return image;
    }
    while (stack.length) {
        let curr = stack.pop();
        let row = curr[0];
        let col = curr[1]
        if (row >= image.length || col >= image[0].length || row < 0 || col < 0) {
            continue;
        }
        let currColor = image[row][col];
        if (currColor != originalColor) {
            continue;
        }
        image[row][curr[1]] = newColor;
        stack.push([row + 1, col]);
        stack.push([row, col + 1]);
        stack.push([row - 1, col]);
        stack.push([row, col - 1]);
    }
    return image;
};