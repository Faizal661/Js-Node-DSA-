const EventEmitter = require('events');

const myEmitter = new EventEmitter();

myEmitter.on('greet', (name) => {
    console.log(`Hello, ${name}!`);
});

myEmitter.emit('greet', 'Faizal');



//------------
myEmitter.once('onlyOnce', () => {
    console.log('This will only run once!');
});

myEmitter.emit('onlyOnce');
myEmitter.emit('onlyOnce');


//------------
const listener = () => console.log('Hello!');
myEmitter.on('hello', listener);

myEmitter.emit('hello');
myEmitter.removeListener('hello', listener);
myEmitter.emit('hello'); // No output
