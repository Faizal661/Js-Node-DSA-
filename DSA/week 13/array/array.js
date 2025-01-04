//      Array initialization //
// const numbers = [1, 2, 3, 4, 5];

const fruits = ["apple", "banana", "orange"];
const name = 'Mohammed Faizal T'
// const mixed = [10, "hello", true];

// const numbers = new Array(5); // Creates an array with 5 empty elements
// const fruits = new Array("apple", "banana", "orange");

// console.log(...numbers)
// console.log(...fruits)
// console.log(mixed) 




//       Array Setting elements //

// numbers[1]=34;
// fruits[3]='strawberry'


//       Array insertion  

// numbers.splice(2,0,7,8,9)
// numbers.push(7,8,9)
// numbers.unshift(7,8,9)

//       Array deletion 

// numbers.splice(2,2)
// numbers.pop()
// numbers.shift()


//       Array traversal

// for(let i of name){
//     console.log(i)
// }

// for(let i=0;i<name.length;i++){
//     console.log(name[i])
// }

// fruits.forEach((item,index)=>{
//     console.log(index+1,item)
// })



// const map=numbers.map((sum,curr)=>curr+sum,0)
// console.log(numbers)
// console.log(map)

// console.log(...numbers)
// console.log(...fruits)

const numbers = [1, 2, 3, 4, 5,2];

const numbers2 = [1, 3, 5, 7, 9]

const result = []
const unique = {}
for (let i = 0; i < numbers.length; i++) {
    if (!unique[numbers[i]]) {
        unique[numbers[i]] = 1
    }else {
        unique[numbers[i]]++
    }
}

for (let i = 0; i < numbers2.length; i++) {
    if (!unique[numbers2[i]]) {
        unique[numbers2[i]] = 1
    } else {
        unique[numbers2[i]]++
    }
}
console.log(unique)

for (let key in unique) {
    if (unique[key] === 1) {
        result.push(parseInt(key))
    }
}


console.log(result)

