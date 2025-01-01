const fs= require('fs')

const read=fs.readFile('./server.js',{encoding: "utf8"},(data,err)=>{
    console.log(err)
})
console.log(read)
