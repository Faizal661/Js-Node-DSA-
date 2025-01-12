class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }
    print() {
        console.log(this.items)
    }
}

class Queue {
    constructor() {
        this.items = []
    }
    enqueue(element) {
        this.items.push(element)
    }
    dequeue() {
        return this.items.shift()
    }
    isEmpty() {
        return this.items.length === 0
    }
    peek() {
        if (!this.isEmpty()) {
            return this.items[0]
        }
        return null
    }
    size() {
        return this.items.length
    }
    print() {
        console.log(this.items)
    }
}


const q=new Queue()
q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
q.enqueue(4)
q.enqueue(5)
q.print()

function reverseQueue(queue){
    const stack = new Stack()
    while(!queue.isEmpty()){
        stack.push(queue.dequeue())
    }

    while(!stack.isEmpty()){
        queue.enqueue(stack.pop())
    }
    }
reverseQueue(q)    
q.print()
