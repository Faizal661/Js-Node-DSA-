// Callback hell is when multiple nested callbacks create code that's hard to read and maintain.

function task1(callback){
    setTimeout(()=>{
        console.log('task1 completed')
        callback()
    },1000)
}

function task2(callback){
    setTimeout(()=>{
        console.log('task2 completed')
        callback()
    },2000)
}

function task3(callback){
    setTimeout(()=>{
        console.log('task3 completed')
        callback()
    },3000)
}

task1(()=>{
    task2(()=>{
        task3(()=>{
            console.log('completed.....')
        })
    })
})



