/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    let left = 0
    let right = letters.length - 1;
    if (target >= letters[right]) return letters[0];
    target += 1;
    while (left < right) {
        let mid = left + Math.floor((right - left) / 2);
        if (letters[mid] === target) {
            return letters[mid];
        }
        else if (letters[mid] > target) {
            right = mid;
        }
        else {
            left = mid + 1
        }
    }
    return letters[right];
};
