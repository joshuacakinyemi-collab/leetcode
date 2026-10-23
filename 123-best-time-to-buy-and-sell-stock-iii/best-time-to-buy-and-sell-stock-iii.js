/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // find the max profit with at most two transactions
    // test with old answers
    let buy1 = -Infinity 
    let buy2 = -Infinity
    let sell1 = 0
    let sell2 = 0

    for(const price of prices){
        buy1 = Math.max(buy1, -price)
        sell1 = Math.max(sell1, buy1 + price)
        buy2 = Math.max(buy2, sell1 - price)
        sell2 = Math.max(sell2,buy2 + price)

    }

    return sell2
};