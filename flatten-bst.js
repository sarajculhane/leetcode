// 114. Flatten Binary Tree to Linked List

const DFS = (root, queue) => {
    if(root === null) return
    queue.push(root.val)
    DFS(root.left, queue)
    
    DFS(root.right, queue)
}
var flatten = function(root) {
    let queue = []
    DFS(root, queue)
    queue.shift()
    while(queue.length) {
        let curNode = new TreeNode(queue[0])
        queue.shift()
        root.left = null
        root.right = curNode
        root = root.right
    }
};
