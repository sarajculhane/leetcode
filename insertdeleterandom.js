//380. Insert Delete GetRandom O(1)

var RandomizedSet = function() {
    this.set = new Set()
};
RandomizedSet.prototype.insert = function(val) {
    if(!this.set.has(val)){
        this.set.add( val)
        return true
    } else {
        return false
    }
};

RandomizedSet.prototype.remove = function(val) {
    if(this.set.has(val)) {
        this.set.delete(val)
        return true
    } else {
        return false
    }
    
};

RandomizedSet.prototype.getRandom = function() {
    let rand = Math.floor(Math.random()*Math.floor(this.set.size))
    return Array.from(this.set)[rand]
};
