// function timer(n){
//     for(let i=1;i<=n;i++){
//         setTimeout(()=>{
//             console.log(i)
//         },i*1000)
//     }
// }
// timer(10)

const { clearInterval } = require("timers")


function timer(){
    let i=1
    const interval=setInterval(()=>{
        console.log(i)
        i++
        if(i>10) clearInterval(interval)
    },1000)
}
timer()