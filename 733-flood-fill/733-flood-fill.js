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
        if (curr[0] >= image.length || curr[1] >= image[0].length || curr[0] < 0 || curr[1] < 0) {
            continue;
        }
        let currColor = image[curr[0]][curr[1]];
        if (currColor != originalColor) {
            continue;
        }
        image[curr[0]][curr[1]] = newColor;
        stack.push([curr[0] + 1, curr[1]]);
        stack.push([curr[0], curr[1] + 1]);
        stack.push([curr[0] - 1, curr[1]]);
        stack.push([curr[0], curr[1] - 1]);
    }
    return image;
};