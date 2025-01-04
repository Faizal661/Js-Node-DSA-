class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
}
const DLL = new DoublyLinkedList()

function insertAtBeginning(data) {
    const newNode = new Node(data);
    if (!DLL.head) {
        DLL.head = newNode;
        DLL.tail = newNode;
    } else {
        newNode.next = DLL.head;
        DLL.head.prev = newNode;
        DLL.head = newNode;
    }
}
insertAtBeginning(1)
insertAtBeginning(1)

function insertAtEnd(data) {
    const newNode = new Node(data);
    if (!DLL.head) {
        DLL.head = newNode;
        DLL.tail = newNode;
    } else {
        DLL.tail.next = newNode;
        newNode.prev = DLL.tail;
        DLL.tail = newNode;
    }
}
insertAtEnd(2)
insertAtEnd(3)


function traverseForward(DLL) {
    let current = DLL.head;
    while (current) {
        console.log(current.data);
        current = current.next;
    }
}

traverseForward(DLL)