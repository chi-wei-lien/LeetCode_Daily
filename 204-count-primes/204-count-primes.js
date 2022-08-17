/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    let ans = 0;
    let mark = new Array(n + 1);
    for (let i = 2; i * i < n; i++) {
        if (mark[i] === 1) continue;
        let temp = i * 2;
        while (temp <= n) {
            mark[temp] = 1;
            temp += i;
        }
    }
    for (let i = 2; i < mark.length - 1; i++) {
        if (mark[i] != 1) {
            ans++;
        }
    }
    return ans;
};