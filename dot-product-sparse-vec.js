// 1570. Dot Product of Two Sparse Vectors

var SparseVector = function(nums) {
    this.nums = nums
};

// Return the dotProduct of two sparse vectors
/**
 * @param {SparseVector} vec
 * @return {number}
 */
SparseVector.prototype.dotProduct = function(vec) {
    return this.nums.map((val,i) => val*vec.nums[i]).reduce((a, b) => a+b)
};
