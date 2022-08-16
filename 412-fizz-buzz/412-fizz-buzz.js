/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let ans = new Array(n);
    for (let i = 0; i < ans.length; i++) {
        if ((i + 1) % 15 === 0) {
            ans[i] = "FizzBuzz";
        }
        else if ((i + 1) % 3 === 0) {
            ans[i] = "Fizz";
        }
        else if ((i + 1) % 5 === 0) {
            ans[i] = "Buzz";
        }
        else {
            ans[i] = (i + 1).toString();
        }
    }
    return ans;
};