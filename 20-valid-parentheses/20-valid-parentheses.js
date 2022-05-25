/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [s.charAt(0)];
    let map = new Map();
    map.set("(", ")");
    map.set("[", "]");
    map.set("{", "}");
    for (let i = 1; i < s.length; i++) {
        if (s.charAt(i) === map.get(stack[stack.length - 1])) {
            stack.pop();
        }
        else {
            stack.push(s.charAt(i));
        }
    }
    if (stack.length) {
        return false;
    }
    return true;
};