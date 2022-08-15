/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let low = prices[0];
    let profit = 0;
    for (let i = 1; i < prices.length; i++) {
        let earn = prices[i] - low;
        if (earn > profit) profit = earn;
        if (prices[i] < low) low = prices[i];
    }
    return profit
};