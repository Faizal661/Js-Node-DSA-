const path = require('path');


const filePath = '/user/local/bin/file.txt';

console.log(path.basename(filePath)); // Output: file.txt
console.log(path.basename(filePath, '.txt')); // Output: file

console.log(path.dirname(filePath)); // Output: /user/local/bin



console.log(path.extname(filePath)); // Output: .txt
