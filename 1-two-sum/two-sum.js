/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map()
    for(let i = 0; i < nums.length; i++){
        const complment = target - nums[i]
        if(map.has(complment)){
            return [map.get(complment), i]
        }
        map.set(nums[i],i)
    }

};