// 3. Longest Substring Without Repeating Characters

var lengthOfLongestSubstring = function(s) {
    let count = 0, long = new Map() , max = 0,  j = 0
    
    for(let i = 0; i < s.length; i++) {
        if(long.has(s.charCodeAt(i))) {
          j = Math.max(long.get(s.charCodeAt(i)), j)
        }
        max = Math.max(max, i - j + 1)
        long.set(s.charCodeAt(i), i+1)
    
}
    return max
};
