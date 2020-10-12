// 287. Find the Duplicate Number

var findDuplicate = function(nums) {
    let hashTable = {}
    for(let num of nums) {
        if(!hashTable[num]) {
            hashTable[num] = true
        } else {
            return num
        }
    }
};
