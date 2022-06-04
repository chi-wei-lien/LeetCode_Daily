/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    let queue = [rooms[0]];
    let map = new Map();
    while (queue.length > 0) {
        let shifted = queue.shift();
        for (let i = 0; i < shifted.length; i++) {
            if (map.get(shifted[i])) {
                continue;
            }
            map.set(shifted[i], true);
            queue.push(rooms[shifted[i]]);
        }
    }
    // console.log(map)
    for (let i = 1; i < rooms.length; i++) {
        if (!map.get(i)) {
            return false;
        }
    }
    return true;
};