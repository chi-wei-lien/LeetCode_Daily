/**
 * @param {string} s
 * @return {number}
 */

var convert = function(l) {
    switch(l) {
        case "I": return 1;
        case "V": return 5;
        case "X": return 10;
        case "L": return 50;
        case "C": return 100;
        case "D": return 500;
        case "M": return 1000;
    }
}

var romanToInt = function(s) {
    let ans = convert(s.charAt(0));
    let prev = ans;
    for (let i = 1; i < s.length; i++) {
        let curr = convert(s.charAt(i));
        if (curr > prev) {
            ans += curr - 2 * prev
        }
        else {
            ans += curr
        }
        prev = curr;
    }
    return ans;
};