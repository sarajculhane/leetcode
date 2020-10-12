
var CustomStack = function(maxSize) {
    this.stack = []
    this.maxSize = maxSize
    
};

CustomStack.prototype.push = function(x) {
    if(this.stack.length < this.maxSize) this.stack.push(x)
};


CustomStack.prototype.pop = function() {
    if(this.stack.length) return this.stack.pop()
    else return -1
};


CustomStack.prototype.increment = function(k, val) {
    console.log(this.stack)
    this.stack = this.stack.map((elem, i) => {
       if(i+1 <= k) return elem+val
        else return elem
    })
};
