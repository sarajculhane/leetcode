// 451. Sort Characters By Frequency

var frequencySort = function(s) {
    let hash = {}
    for(let i = 0; i < s.length; i++) {
        if(!hash[s[i]]) hash[s[i]] = s[i]
        else hash[s[i]] += s[i]
    }
    return Object.values(hash).sort((a,b) => b.length-a.length).join('')
};
