// 295. Find Median from Data Stream

var MedianFinder = function() {
    this.data = []
};


MedianFinder.prototype.addNum = function(num) {
    this.data.push(num)
};

MedianFinder.prototype.findMedian = function() {
    if(this.data.length === 1) return this.data[0]
    this.data = this.data.sort((a, b) => b-a)
    if(this.data.length % 2=== 0) return (this.data[this.data.length /2] + this.data[this.data.length /2-1])/2
   
    else {
        return this.data[(this.data.length-1)/2]
    }
};
