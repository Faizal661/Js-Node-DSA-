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



// const a = Promise.resolve(Promise.reject()).catch(() => "ERRR")

//     a.then((o) => console.log(o))
//         .catch((error) => console.error(error))


        