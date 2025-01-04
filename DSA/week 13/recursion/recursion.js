// function factorial(n){
//     if(n===0){
//         return 1
//     }else{
//         return n*factorial(n-1)
//     }
// }
// console.log('factorial :',factorial(5))


// function fibonacci(n){
//     if(n<=1){
//         return n
//     }else{
//         return fibonacci(n-1)+fibonacci(n-2)
//     }
// }
//  console.log('fibonacci :',fibonacci(3))

// 0,1,1,2,3,5,8,13,21,34,55     



function sumOf(n){
    if(n<1){
        return 0
    }else{
        return n+sumOf(n-1)
    }
}

console.log(sumOf(7))
 




















