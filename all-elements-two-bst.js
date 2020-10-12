// 1305. All Elements in Two Binary Search Trees

const DFS = (root, arr) => {
    if(root === null) return;
    
    DFS(root.left,arr)
    arr.push(root.val)
    DFS(root.right,arr)
}
var getAllElements = function(root1, root2) {
    let arr1 = []
    let arr2 = []
    
    DFS(root1,arr1)
    DFS(root2,arr2)
    
    return arr1.concat(arr2).sort((a,b) => a-b)
    
};
