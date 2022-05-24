/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) {
    let queue = ["0000"];
    let distance = 0;
    let map = new Map;
    for (let i = 0; i < deadends.length; i++) {
        map[deadends[i]] = true;
    }
    
    while (queue.length > 0) {
        let queueLength = queue.length;  
        for (let i = 0; i < queueLength; i++) {
            let node = queue.shift();
            // console.log(node);
            if (node === target) return distance
            if (map[node]) continue;
            map[node] = true;
            for (let j = 0; j < 4; j++) {
                for (let direction of [-1, 1]) {
                    let prefix = node.slice(0, j);
                    let num = node.slice(j, j + 1);
                    num = parseInt(num) + direction;
                    num = ((num % 10) + 10) % 10;
                    let suffix = node.slice(j + 1);
                    queue.push(prefix + num + suffix);
                }
            }
        }
        distance++;
    }
    return -1;
};