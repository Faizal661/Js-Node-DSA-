class Stack {
    constructor() {
        this.items = []
    }
    push(element) {
        this.items.push(element)
    }
    pop() {
        return this.items.pop()
    }
    peek() {
        return this.items[this.items.length - 1]
    }
    isEmpty() {
        return this.items.length === 0
    }
    print() {
        console.log('stack is :')
        for (let i = 0; i < this.items.length; i++) {
            console.log(this.items[i])
        }
    }
}

const stack = new Stack()
// console.log(stack.peek())

stack.push(5)
stack.push(1)
stack.push(8)
stack.push(-3)
stack.push(12)

stack.print()
// console.log(stack.peek())


console.log('sorted Stack is')
function sortedStack(stack) {
    const sorted = new Stack()
    while (!stack.isEmpty()) {
        const curr = stack.pop()
        while (!sorted.isEmpty() && sorted.peek() > curr) {
            stack.push(sorted.pop())
        }
        sorted.push(curr)
    }
    return sorted
}

const sorted = sortedStack(stack)
sorted.print()
