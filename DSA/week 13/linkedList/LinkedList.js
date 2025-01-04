//        initialization of linked list
class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}
class SinglyLinkedList {
  constructor() {
    this.head = null
  }
}
const sLL = new SinglyLinkedList()
// adding and dispalying singly LL

function addAtEnd(data) {
  const newNode = new Node(data)
  if (!sLL.head) {
    sLL.head = newNode
  } else {
    let current = sLL.head
    while (current.next) {
      current = current.next
    }
    current.next = newNode
  }
}
addAtEnd(3)
addAtEnd(5)
addAtEnd(7)
addAtEnd(9)
addAtEnd(11)

function addAtBeginning(data) {
  const newNode = new Node(data)
  newNode.next = sLL.head
  sLL.head = newNode
}
// addAtBeginning(2)
addAtBeginning(1)

//   deleting a node 

function deleteNode(data) {
  if (!sLL.head) return;
  if (sLL.head.data === data) {
    sLL.head = sLL.head.next
    return
  }
  let current = sLL.head;
  while (current.next && current.next.data !== data) {
    current = current.next
  }
  if (current.next) {
    current.next = current.next.next
  }
}
// deleteNode(1)  

function insertAfter(value, data) {
  let current = sLL.head
  while (current && current.data !== value) {
    current = current.next
  }
  if (current) {
    const newNode = new Node(data)
    newNode.next = current.next
    current.next = newNode
  }

}
insertAfter(1, 2)

function insertBefore(value, data) {
  if (!sLL.head) return;
  if (sLL.head.data === value) {
    const newNode = new Node(data)
    newNode.next = sLL.head
    sLL.head = newNode
    return
  }
  let current = sLL.head
  while (current.next && current.next.data != value) {
    current = current.next
  }
  if (current.next) {
    const newNode = new Node(data)
    newNode.next = current.next
    current.next = newNode
  }
}
insertBefore(5, 2)



function displayLL(sLL) {
  let current = sLL.head
  while (current) {
    console.log(current.data)
    current = current.next
  }
}
// displayLL(sLL)

// function dispalyRev(sLL){
//   let current=sLL.head
//   const arr=[]
//   while(current){
//     arr.push(current.data)
//     current=current.next
//   }
//   while(arr.length>0){
//   console.log(arr.pop())
//   }
// }
// dispalyRev(sLL)













// setting a value in LL
// const myLL= new LinkedList()
// myLL.head= new Node(10);
// myLL.head.next=new Node(20)

// console.log(myLL)

// getting a value in LL 

function getValueAtIndex(linkedList, index) {
  let current = linkedList.head;
  let currentIndex = 0;

  while (current && currentIndex < index) {
    current = current.next;
    currentIndex++;
  }

  if (current) {
    return current.data;
  } else {
    return null; // Index out of bounds
  }
}

//   console.log('getting value of index :',getValueAtIndex(myLL, 1)); // Output: 20

// inserting into LL
function insertAtIndex(linkedList, index, data) {
  const newNode = new Node(data);

  if (index === 0) {
    newNode.next = linkedList.head;
    linkedList.head = newNode;
  } else {
    let current = linkedList.head;
    let currentIndex = 0;

    while (current && currentIndex < index - 1) {
      current = current.next;
      currentIndex++;
    }

    if (current) {
      newNode.next = current.next;
      current.next = newNode;
    } else {
      // Index out of bounds
    }
  }
}

// insertAtIndex(myLL, 0, 15);
// console.log(myLL)

// deletion in LL

function deleteAtIndex(linkedList, index) {
  if (index === 0) {
    linkedList.head = linkedList.head.next;
  } else {
    let current = linkedList.head;
    let currentIndex = 0;

    while (current && currentIndex < index - 1) {
      current = current.next;
      currentIndex++;
    }

    if (current && current.next) {
      current.next = current.next.next;
    } else {
      // Index out of bounds or last node
    }
  }
}

//   deleteAtIndex(myLL, 4); 
//   console.log(myLL)


//         traversing in ll
function traverseLinkedList(linkedList) {
  let current = linkedList.head;

  while (current) {
    console.log(current.data);
    current = current.next;
  }
}

// traverseLinkedList(myLL);



function arrayToLinkedList(array) {
  if (array.length === 0) {
    return null; // Empty array returns an empty linked list
  }

  const head = new Node(array[0]); // Create head node with the first element
  let current = head;

  for (let i = 1; i < array.length; i++) {
    current.next = new Node(array[i]); // Create new node and link it to the current node
    current = current.next;
  }

  return head;
}

const myArray = [1, 2, 3, 4, 5];
const linkedList = arrayToLinkedList(myArray);
console.log(linkedList.next); 