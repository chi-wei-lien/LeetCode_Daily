/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let count = 0;
    let row = grid.length;
    let column = grid[0].length;
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
            if (grid[i][j] == "1") {
                count++;
                cleanIsland(grid, i, j);
            }
        }
    }
    return count;
};

var cleanIsland = function(grid, i, j) {
    let queue = [[i,j]];
    while (queue.length) {
        let data = queue.shift();
        let row = data[0];
        let column = data[1];
        if (row < 0 || column < 0 || row === grid.length || column === grid[0].length) {
            continue;
        }
        if (grid[row][column] === "0") {
            continue;
        }
        else {
            grid[row][column] = "0";
        }
        queue.push([row + 1, column]);
        queue.push([row, column + 1]);
        queue.push([row - 1, column]);
        queue.push([row, column - 1]);
    }
}