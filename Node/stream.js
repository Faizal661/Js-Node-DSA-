const fs = require('fs');

const readableStream = fs.createReadStream('./Node/cluster.js','utf8');

readableStream.on('data', (chunk) => {
  console.log('Received chunk:', chunk);
});

// readableStream.on('end', () => {
//   console.log('Finished reading the file.');
// });

// readableStream.on('error', (err) => {
//   console.error('Error:', err.message);
// });
