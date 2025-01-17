function* multipletable(item){
    let i=1
    while(true){
        yield item*i
        i++
    }
}

const table=multipletable(5)
console.log(table.next().value)
console.log(table.next().value)
console.log(table.next().value)
console.log(table.next().value)
console.log(table.next().value)
console.log(table.next().value)