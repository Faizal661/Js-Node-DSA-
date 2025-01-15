// The Buffer class in Node.js is a built-in class used to handle binary data directly. It was introduced because JavaScript originally wasn't very good at handling raw binary data, which is essential for things like file operations, network protocols, and cryptography.


// 1/ creation
// Create a Buffer from a string
const buf1 = Buffer.from('Hello World');

// Create a Buffer of specified size
const buf2 = Buffer.alloc(10); // Creates a zero-filled buffer of 10 bytes

// Create an uninitialized buffer (faster but may contain old data)
const buf3 = Buffer.allocUnsafe(10);



// 2/ operations
// Writing to a buffer
const buf = Buffer.alloc(5);
buf.write('hello');

// Reading from a buffer
console.log(buf.toString()); // 'hello'

// Get buffer length
console.log(buf.length); // 5

// Copy buffers
const bufCopy = Buffer.alloc(5);
buf.copy(bufCopy);


// 3/ conversions
// Buffer to String
const buf4 = Buffer.from('Hello');
console.log(buf.toString()); // 'Hello'
console.log(buf.toString('hex')); // '48656c6c6f'
console.log(buf.toString('base64')); // 'SGVsbG8='

// String to Buffer
const str = 'Hello';
const buf5 = Buffer.from(str);


// 4/ common use cases

// Reading files
const fs = require('fs');

fs.readFile('example.txt', (err, buffer) => {
    console.log(buffer); // <Buffer 48 65 6c 6c 6f>
    console.log(buffer.toString()); // Contents of file
});

// Network operations
const server = require('net').createServer(socket => {
    socket.on('data', buffer => {
        // Handle incoming data buffer
        console.log(buffer.toString());
    });
});

// Working with binary data
const buf6 = Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72]);
console.log(buf.toString()); // 'buffer'
