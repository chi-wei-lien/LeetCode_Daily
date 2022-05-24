/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    let queue = [0];
    let result = 0;
    let map = new Map();
    while (queue.length > 0) {
        let queueLength = queue.length;
        for (let i = 0; i < queueLength; i++) {
            let cur = queue.shift();
            if (cur === n) return result;
            for (let j = 1; cur + j * j <= n; j++) {
                let sq = cur + j * j;
                if (!map[sq]) {
                    queue.push(sq);
                }
                map[sq] = true;
            }
        }
        result++;
    }
    return n;
};
