/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    let left = 0
    let n = letters.length;
    let right = n;
    while (left < right) {
        let mid = left + Math.floor((right - left) / 2);
        if (letters[mid] > target) {
            right = mid;
        }
        else {
            left = mid + 1
        }
    }
    return letters[right % n];
};
