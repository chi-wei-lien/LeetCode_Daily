/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let map = new Map();
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) === "[") {
            stack.push(i);
        }
        else if (s.charAt(i) === "]") {
            let popped = stack.pop();
            map.set(popped, i);
        }
    }
    return recur(0, s.length, s, map);
};

var recur = function(l, r, s, map) {
    let num = 0;
    let ans = "";
    for (let i = l; i < r; i++) {
        if (Number(s.charCodeAt(i)) >= 48 && Number(s.charCodeAt(i)) <= 57) {
            num = num * 10 + Number(s.charAt(i));
        }
        else if (s.charAt(i) === "[") {
            let tempResult = recur(i + 1, map.get(i), s, map);
            console.log(num);
            for (let j = 0; j < num - 1; j++) {
                ans += tempResult;
            }
            num = 0;
        }
        else if (s.charAt(i) === "]") {
            continue;
        }
        else {
            ans += s.charAt(i);
        }
    }
    return ans;
}