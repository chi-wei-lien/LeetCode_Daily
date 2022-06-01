/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    let queue = [[sr, sc]];
    let originalColor = image[sr][sc];
    if (originalColor === newColor) {
        return image;
    }
    while (queue.length) {
        let queueLength = queue.length;
        for (let i = 0; i < queueLength; i++) {
            let curr = queue.shift();
            if (curr[0] >= image.length || curr[1] >= image[0].length || curr[0] < 0 || curr[1] < 0) {
                continue;
            }
            let currColor = image[curr[0]][curr[1]];
            if (currColor != originalColor) {
                continue;
            }
            console.log(curr);
            image[curr[0]][curr[1]] = newColor;
            queue.push([curr[0] + 1, curr[1]]);
            queue.push([curr[0], curr[1] + 1]);
            queue.push([curr[0] - 1, curr[1]]);
            queue.push([curr[0], curr[1] - 1]);
        }
    }
    return image;
};