// 961. N-Repeated Element in Size 2N Array

var repeatedNTimes = function(A) {
    const N = A.length / 2
    const freq = {}
    
    for(let i = 0; i < A.length; i++) {
        if(!freq[A[i]]) freq[A[i]] = 1
        else freq[A[i]]++
    }
    return Number(Object.keys(freq).filter((key) => freq[key] === N).join(''))
};
