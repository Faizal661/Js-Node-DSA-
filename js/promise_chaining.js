
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let one=true;
        if(one){
            resolve(1)
        }else{
            reject('error occured')
        }
    }, 3000)
})

promise.then((result) => {
    console.log(result)
    return result * 2
}).then((result)=>
{
    console.log(result)
    return result * 2
}).then((result)=>
{
    console.log(result)
    return result * 2
}).then((result)=>
{
    console.log(result)
    return result * 2
}).then((result)=>
{
    console.log(result)
    return result * 2
}).then((result)=>
{
    console.log(result)
    return result * 2
}).then((result)=>
{
    console.log(result)
    return result * 2
}).catch((err)=>{
    console.log(err)
}).finally(()=>{
    console.log('finally is happened')
})