class Node {
    constructor(data) {
        this.data = data;
        this.children = [];
    }
}
const root = new Node('A');
const nodeB = new Node('B');
const nodeC = new Node('C');
root.children.push(nodeB);
root.children.push(nodeC);
const nodeD = new Node('D');
const nodeE = new Node('E');
nodeB.children.push(nodeD);
nodeC.children.push(nodeE);

function preOrderTraversal(node) {
    if (node === null) {
        return;
    }
    console.log(node.data);
    for (const child of node.children) {
        preOrderTraversal(child);
    }
}
console.log('Pre Order ')
preOrderTraversal(root)

function postOrderTraversal(node) {
    if (node === null) {
        return;
    }
    for (const child of node.children) {
        postOrderTraversal(child);
    }
    console.log(node.data);
}
console.log('Post Order ')
postOrderTraversal(root)