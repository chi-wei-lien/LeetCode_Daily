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
    if (i < 0 || j < 0 || i === grid.length || j === grid[0].length || grid[i][j] === "0") {
        return;
    }
    grid[i][j] = "0";
    cleanIsland(grid, i + 1, j);
    cleanIsland(grid, i, j + 1);
    cleanIsland(grid, i - 1, j);
    cleanIsland(grid, i, j - 1);

}