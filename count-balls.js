//1742. Maximum Number of Balls in a Box

var countBalls = function(lowLimit, highLimit) {
    const freq = {}
    
    for(let i = lowLimit; i < highLimit +1; i++) {
        let num = i.toString().split('').map((num) => Number(num)).reduce((a, b) => a + b)
        if(!freq[num]) freq[num] = 1
        else freq[num]++
    }
    return Math.max(...Object.values(freq))
};
