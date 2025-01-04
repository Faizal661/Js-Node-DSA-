// class Queue {
//     constructor() {
//         this.items = []
//     }
//     enqueue(element) {
//         this.items.push(element)
//     }
//     dequeue() {
//         return this.items.shift()
//     }
//     isEmpty() {
//         return this.items.length === 0
//     }
//     peek() {
//         if (!this.isEmpty()) {
//             return this.items[0]
//         }
//         return null
//     }
//     size() {
//         return this.items.length
//     }
//     print() {
//         console.log(this.items)
//     }
// }


class Queue{
    constructor(){
        this.items={}
        this.front=0
        this.rear=0
    }
    enqueue(element){
        this.items[this.rear]=element
        this.rear++
    }
    dequeue(){
        const item=this.items[this.front]
        delete this.items[this.front]
        this.front++
        return item    
    }
    isEmpty(){
        return this.rear-this.front===0
    }
    peek(){
        return this.items[this.front]
    }
    size(){
        return this.rear-this.front
    }
    print(){
        console.log(this)
    }
}

const q = new Queue()
q.print()
console.log(q.isEmpty())
console.log(q.peek())

q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
q.enqueue(4)
q.print()

console.log(q.dequeue())
console.log(q.size())
q.print()
console.log(q.peek())
