/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let set = new Set();
    let array = numToArray(n);
    let tempSum = 0;
    do {
        tempSum = 0;
        for (let i = 0; i < array.length; i++) {
            tempSum += Math.pow(array[i], 2);
        }
        if (set.has(tempSum)) {
            return false;
        }
        set.add(tempSum);
        array = numToArray(tempSum);
    } while (tempSum != 1);
    return true;
};

var numToArray = function(n) {
    let array = [];
    let temp = n;
    let length = 1;
    while (Math.floor(temp / 10)) {
        temp = Math.floor(temp / 10);
        length++;
    }
    for (let i = 0; i < length; i++) {
        let digit = Math.floor(n / Math.pow(10, i)) % 10;
        array.push(digit);
    }
    return array;
}