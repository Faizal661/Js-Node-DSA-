const fs= require('fs')

// const read=fs.readFileSync('./Node/cluster.js',"utf8")
// console.log(read)


const write =fs.writeFileSync('example.txt','writing tasks','utf-8',)

fs.appendFileSync('example.txt', '\nAdditional Data', 'utf8');

// fs.unlinkSync('example2.txt');

fs.renameSync('example.txt', 'example1.txt');
