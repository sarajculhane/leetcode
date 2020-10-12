// 94. Binary Tree Inorder Traversal

let helper = (root, arr) => {
    if(root === null) return;
    
    helper(root.left, arr)
    arr.push(root.val)
    helper(root.right, arr)
    
}
var inorderTraversal = function(root) {
    let arr = []
    helper(root, arr)
    return arr    
};
