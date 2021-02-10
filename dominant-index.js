// 747. Largest Number At Least Twice of Others

var dominantIndex = function(nums) {
    const max = Math.max(...nums)
    return nums.filter((num) => num !== max && max < num*2).length === 0 ? nums.indexOf(max) : -1
};
