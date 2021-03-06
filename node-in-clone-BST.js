// 1379. Find a Corresponding Node of a Binary Tree in a Clone of That Tree

var getTargetCopy = function(original, cloned, target) {
    let queue = []
    queue.push(cloned)
    while(queue.length) {
        let curNode = queue[0]
        queue = queue.slice(1)
        if(curNode.val !== null && curNode.val === target.val) return curNode
        if(curNode.left !== null) {
            if(curNode.left.val === target.val) return curNode.left
            queue.push(curNode.left)
        }
        if(curNode.right !== null) {
            if(curNode.right.val === target.val) return curNode.right
            queue.push(curNode.right)
        }
        
    }
    
};
