/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let rows = new Array(9);
    for (let i = 0; i < rows.length; i++) {
        rows[i] = new Set();
    }
    let cols = new Array(9);
    for (let i = 0; i < cols.length; i++) {
        cols[i] = new Set();
    }
    let subGroups = new Array(9);
    for (let i = 0; i < subGroups.length; i++) {
        subGroups[i] = new Set();
    }
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            let cur = board[i][j];
            if (cur != ".") {
                if (rows[i].has(cur) || cols[j].has(cur) || 
                    subGroups[Math.floor(i / 3) * 3 + Math.floor(j / 3)].has(cur)) {
                    return false;
                }
                rows[i].add(cur);
                cols[j].add(cur);
                subGroups[Math.floor(i / 3) * 3 + Math.floor(j / 3)].add(cur);
            }
        }
    }
    return true;
};