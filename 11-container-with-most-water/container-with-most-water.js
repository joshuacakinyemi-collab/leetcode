/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let len = 0
    let left = 0
    let right = height.length -1
    let max = 0

    while(left < right){
        let water = Math.min(height[left], height[right]) * (right - left)
        if(water > max) max = water
        if(height[left] < height[right]) {
            left++
        } else {
            right--
        }
    }
    
    return max
};