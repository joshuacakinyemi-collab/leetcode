/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {

    const index = (num) => num === target

    return nums.findIndex(index)
    
};