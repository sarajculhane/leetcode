// 540. Single Element in a Sorted Array

var singleNonDuplicate = function(nums) {
    let low = 0
    let high = nums.length -1
    while(low < high) {
        let mid = low + (high - low) / 2
        let evens = ( high - mid) % 2 === 0
        
        if(nums[mid+1] === nums[mid]) {
            if(evens) low = mid+2
            else high = mid-1
        }
        else if(nums[mid-1] === nums[mid]) {
            if(evens) high = mid-2
            else low = mid+1
        }
        else return nums[mid]
    }
    return nums[low]
};
