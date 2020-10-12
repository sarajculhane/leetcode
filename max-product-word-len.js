// 318. Maximum Product of Word Lengths

let checkWord = (word1, word2) => {
    for(let i = 0; i < word2.length ; i++) {
        if(word1.includes(word2[i])) return false
    }
    return true
}
var maxProduct = function(words) {
    let max = 0
    
    for(let i = 0 ; i < words.length ; i++) {
        for(let j = 1 ; j < words.length ; j++) {
            if(checkWord(words[i], words[j])) {
                max = Math.max(words[i].length*words[j].length, max)
            }
        }
    }
    
    return max
};
