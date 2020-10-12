//1038. Binary Search Tree to Greater Sum Tree

const bstDepth = (root , sum) => {
    if(root === null) return sum
    sum = bstDepth(root.right, sum) + root.val
    root.val = sum
    sum = bstDepth(root.left, sum)
    return sum
}

var bstToGst = function(root) {
    if(root === null) return root
    bstDepth(root, 0)
    return root

};
