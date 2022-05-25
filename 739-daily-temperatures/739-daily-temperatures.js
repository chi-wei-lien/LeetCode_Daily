/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let stack = [[temperatures[0], 0]];
    for (let i = 1; i < temperatures.length; i++) {
        for (let j = stack.length - 1; j >= 0; j--) {
            if (stack[stack.length - 1][0] < temperatures[i]) {
                temperatures[stack[stack.length - 1][1]] = i - stack[stack.length - 1][1];
                stack.pop();
                continue;
            }
            break;
        }
        stack.push([temperatures[i], i]);
    }
    for (let i = 0; i < stack.length; i++) {
        temperatures[stack[i][1]] = 0;
    }
    return temperatures;
};