class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insert(data) {
        const newNode = new Node(data)
        if (!this.head) {
            this.head = newNode
        } else {
            let current = this.head
            while (current.next) {
                current = current.next
            }
            current.next = newNode
        }
    }

    replace(index, val) {
        if (!this.head) {
            console.log('no Elements')
        }else{
            let count=0
            let current =this.head;
            const newNode=new Node(val)
            while(count+1!==index){
                count++
                current=current.next
            }
            newNode.next=current.next.next
            current.next=newNode 
             
        }
    }

    display() {
        if (!this.head) {
            console.log('no Elements')
        } else {
            let current = this.head
            while (current) {
                console.log(current.data)
                current = current.next
            }
        }
    }

}

const rLL = new LinkedList();
rLL.insert(3)
rLL.insert(5)
rLL.insert(7)

// console.log(rLL.display())
console.log(rLL.replace(1,10))
console.log(rLL.display())
