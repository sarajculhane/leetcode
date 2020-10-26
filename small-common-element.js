// 1198. Find Smallest Common Element in All Rows

var smallestCommonElement = function(mat) {
    const mats = []
    mat.forEach((val) =>mats.push(...val))
    const obj = {}
    for(num of mats) {
        if(!obj[num]) obj[num] = 1
        else if(obj[num] < mat.length) obj[num]++
    }
    if(!Object.keys(obj).filter((val) => obj[val] === mat.length).length) return -1
    return Math.min(...Object.keys(obj).filter((val) => obj[val] === mat.length))
};
