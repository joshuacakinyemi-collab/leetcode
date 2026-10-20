/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const left = [1]
    const right = Array(nums.length).fill(0)
    let prev = 1

  for(let i = 1; i< nums.length;i++) {
    left.push(prev * nums[i-1])
    prev *= nums[i-1]
  } 

    prev = 1

  for(let i = nums.length - 1; i>= 0;i--) {
    if(i === nums.length -1) {
        right[i] = 1
    } else {
    right[i] = right[i+1] * nums[i+1]
    }
  } 

  const arr = []
  for(i in nums) {
    arr.push(left[i] * right[i])
  }

  return arr
};