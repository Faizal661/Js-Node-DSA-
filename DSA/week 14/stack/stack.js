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
    print(){
         console.log(this.items)
    }
}

// const s=new Stack();
// s.push(1)
// s.push(2)
// s.push(3)
// s.push(4)
// s.push(5)
// s.pop()
// console.log(s.peek())        
// console.log(s.isEmpty())
// s.print()


//REVERSE STRING USING STACK
const str='hello world'
const s=new Stack();
function reverseString(str,Stack){
    for(let i=0;i<str.length;i++){
        Stack.push(str[i])
    }
    let revstr=''
    while(!Stack.isEmpty()){
        revstr+=Stack.pop()
    }      
    return revstr
}
console.log(str) 
console.log(reverseString(str,s)) 
     