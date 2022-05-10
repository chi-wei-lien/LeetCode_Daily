/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    let containInc = false;
    let containDec = false;
    let beforePeak = true;
    for (let i = 1; i < arr.length; i++) {
        if (beforePeak) {
            if (arr[i] > arr[i - 1]) {
                containInc = true;
            }
            else if (arr[i] === arr[i - 1]) {
                return false;
            }
            else {
                beforePeak = false;
                containDec = true;
            }
        }
        else {
            if ((arr[i] > arr[i - 1]) || (arr[i] === arr[i - 1])) {
                return false;
            }
        }
        
    }
    if (containInc && containDec) {
        return true;
    }
    return false;
};