/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = Infinity
    let high = 0
    for(const price of prices){
        min = Math.min(min, price)
        high = Math.max(high, price - min)
    }
return high
};