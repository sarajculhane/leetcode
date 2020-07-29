/// 1464. Maximum Product of Two Elements in an Array
/// https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/

var maxProduct = function(nums) {
    const maxIndx = nums.indexOf(Math.max(...nums))
    const maxNums = [Math.max(...nums), 0]
    nums.forEach((num, i)=> {
        if(num > maxNums[1] && i !== maxIndx) maxNums[1] = num
    })
    
    return (maxNums[0]-1)*(maxNums[1]-1)
};
