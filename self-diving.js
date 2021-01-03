// 728. Self Dividing Numbers

var selfDividingNumbers = function(left, right) {
    const nums = []
    
    for(let i = left; i < right + 1; i++) {
        nums.push(i)
    }
    return nums.filter((num) => {
        let str = num.toString()
        for(let i = 0; i < str.length; i++) {
            
            if(num % Number(str[i]) !== 0) return false
        }
        return true
    })
    
    
};
