/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    let map = new Map();
    let result = [];
    let minIndexSum = list1.length + list2.length;
    for (let i = 0; i < list1.length; i++) {
        map.set(list1[i], i);
    }
    for (let i = 0; i < list2.length; i++) {
        if (map.has(list2[i])) {
            let sum = map.get(list2[i]) + i;
            if (sum < minIndexSum) {
                minIndexSum = sum;
                result = [list2[i]];
            }
            else if (sum === minIndexSum) {
                result.push(list2[i]);
            }
        }
    }
    return result;
};