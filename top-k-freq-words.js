// 692. Top K Frequent Words

var topKFrequent = function(words, k) {
    let wordMap = {}
    
    for(let word of words) {
        if(!wordMap[word]) wordMap[word] = 1
        else wordMap[word]++
    }
    return Object.keys(wordMap).sort((a, b) =>a.localeCompare(b))
        .sort((a, b) => wordMap[b] - wordMap[a]).slice(0, k)
};
