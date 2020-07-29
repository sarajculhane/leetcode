var maxProduct = function(nums) {
    const maxIndx = nums.indexOf(Math.max(...nums))
    const maxNums = [Math.max(...nums), 0]
    nums.forEach((num, i)=> {
        if(num > maxNums[1] && i !== maxIndx) maxNums[1] = num
    })
    
    return (maxNums[0]-1)*(maxNums[1]-1)
};
