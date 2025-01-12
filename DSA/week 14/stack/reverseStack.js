class Stack{
    constructor(){
        this.items=[]
    }
    push(element){
        this.items.push(element)
    }
    pop(){
        return this.items.pop()
    }
    peek(){
        return this.items[this.items.length-1]
    }
    isEmpty(){
        return this.items.length===0
    }
    print(){
        console.log('stack is :')
        for(let i=0;i<this.items.length;i++){
            console.log(this.items[i])
        }
    }
}

const org=new Stack()
org.push(1)
org.push(2)
org.push(3)
org.push(4)
org.push(5)

// console.log(org.items)
org.print()

function reverseStack(stack){
    const tempStack=new Stack()
    while(!stack.isEmpty()){
        tempStack.push(stack.pop())
    }
    return tempStack
}

const reversedStack=reverseStack(org)
// console.log(reversedStack.items)
reversedStack.print()