// 1394. Find Lucky Integer in an Array

var findLucky = function(arr) {
    const freq = {}
    
    for(let val of arr) {
        if(!freq[val]) freq[val] = 1
        else freq[val]++
    }
    
    return Object.keys(freq).filter((key) => Number(key) === freq[key]).length ? Math.max(...Object.keys(freq).filter((key) => Number(key) === freq[key])) : -1
};
