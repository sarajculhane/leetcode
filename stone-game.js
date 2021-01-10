// 877. Stone Game

var stoneGame = function(piles) {
    let p1 = 0, p2 = 0, isPlaying = true
    
    for(let i = 0; i < piles.length; i++) {
        if(isPlaying) {
            p1 += Math.max(piles[i], piles[piles.length-1])

        } else {
            p2 = Math.max(piles[i], piles[piles.length-1])
        }
        isPlaying = !isPlaying
    }
    return p1 > p2 
};
