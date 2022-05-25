/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [];
    for (let i = 0; i < tokens.length; i++) {
        if (tokens[i] === "/" || tokens[i] === "+" || tokens[i] === "-" || tokens[i] === "*") {
            let a = parseInt(stack.pop());
            let b = parseInt(stack.pop());
            if (tokens[i] === "/") {
                stack.push((b / a).toString());
            }
            else if (tokens[i] === "+") {
                stack.push((a + b).toString());
            }
            else if (tokens[i] === "-") {
                stack.push((b - a).toString());
            }
            else if (tokens[i] === "*") {
                stack.push((a * b).toString());
            }
        }
        else {
            stack.push(tokens[i]);
        }
    }
    return Math.trunc(stack[0]);
};