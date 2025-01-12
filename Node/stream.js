const fs = require('fs');

const readableStream = fs.createReadStream('./../js/js/currying.js','utf8');

readableStream.on('data', (chunk) => {
  console.log('Received chunk:=>\n', chunk);
});

readableStream.on('end', () => {
  console.log('Finished reading the file.');
});

readableStream.on('error', (err) => {
  console.error('Error:', err.message);
});
