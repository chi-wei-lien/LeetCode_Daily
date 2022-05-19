/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    let queue = [root];
    let data = [];
    while (queue.length) {
        let length = queue.length;
        for (let i = 0; i < length; i++) {
            let node = queue.shift();
            if (node) {
                queue.push(node.left);
                queue.push(node.right);
                data.push(node.val);
            }
            else {
                data.push(null);
            }
        }
    }
    return data;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    if (data[0] === null) return null;
    let root = null;
    let queue = [];
    for (let i = 0; i < data.length; i++) {
        let node = new TreeNode(-1001);
        if (data[i] != null) {
            node = new TreeNode(data[i]);
        }
        if (!root) {
            root = node;
        }
        if (queue.length) {
            if (!queue[0].left) {
                queue[0].left = node;
            }
            else {
                queue[0].right = node;
                queue.shift();
            }
        }
        if (node.val != -1001) queue.push(node);
    }
    replace(root);
    return root;
};

var replace = function(root) {
    if (!root) return;
    if (root.left) {
        if (root.left.val === -1001) root.left = null;
    }
    if (root.right) {
        if (root.right.val === -1001) root.right = null;
    }
    replace(root.left);
    replace(root.right);
}



/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */