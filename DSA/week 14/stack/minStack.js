class minStack{
    constructor(){
        this.stack=[]
        this.minstack=[]
    }

    push(val){
        this.stack.push(val)
        if(this.minstack.length===0 || val<=this.minstack[this.minstack.length-1]){
            this.minstack.push(val)
        }
    }
    pop(){
        const item=this.stack.pop()
        if(this.minstack[this.minstack.length-1]===item){
            this.minstack.pop()
        }
    }
    peek(){
        return this.stack[this.stack.length-1]
    }
    getMin(){
        return this.minstack[this.minstack.length-1]
    }
    display(){
        console.log(this)
    }
}

const ms=new minStack()
ms.push(5)
ms.push(8)
ms.push(3)
ms.push(7)
ms.push(1)
ms.display()
console.log(ms.getMin())
console.log(ms.peek())
