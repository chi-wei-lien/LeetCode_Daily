/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    let queue = [];
    let dir = [
        [-1, 0],
        [0, 1],
        [1, 0],
        [0, -1]
    ]
    
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[0].length; j++) {
            if (mat[i][j] === 0) {
                queue.push([i, j, 0]);
            } else if (mat[i][j] === 1) {
                mat[i][j] = Infinity;
            }
        }
    }
    
    while (queue.length > 0) {
        let queueLength = queue.length;
        let [row, col, path] = queue.shift();
        mat[row][col] = Math.min(mat[row][col], path);
        for (const [dx, dy] of dir) {
            let x = col + dx;
            let y = row + dy;
            if (x < 0 || y < 0 || x >= mat[0].length || y >= mat.length) {
                continue;
            }
            if (mat[y][x] !== Infinity) {
                continue;
            }
            queue.push([y, x, path + 1]);
        }
    }
    return mat;
};