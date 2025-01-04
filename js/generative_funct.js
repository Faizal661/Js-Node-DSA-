function* counter(){
    let count=0
    while(count<5){
        yield count++
    }
}

const c=counter()

console.log(c.next().value)
console.log(c.next().value)
console.log(c.next().value)
console.log(c.next().value)
console.log(c.next().value)
console.log(c.next().value)
console.log(c.next().value)