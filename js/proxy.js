// Proxy in JavaScript
// A Proxy in JavaScript is an object that allows you to intercept and customize operations performed on another object, such as reading properties, writing to properties, function calls, etc. It acts as a "middleman" between the original object (called the target) and the operation being performed.

// const proxy = new Proxy(target, handler);



// Common Use Cases of Proxy
// Validation: Validate inputs before updating properties.
// Logging: Log interactions with an object.
// Default Values: Provide default values for missing properties.
// Read-Only Objects: Prevent modification of object properties.
// Data Binding: Implement reactivity in frameworks like Vue.js.
// Dynamic Behavior: Add custom behavior for accessing or modifying properties.


const person = {
    name: "Faizal",
    age: 25,
};

const handler = {
    get: (target, prop) => {
        console.log(`Property '${prop}' was accessed.`);
        return prop in target ? target[prop] : "Property does not exist";
    },
    set: (target, prop, value) => {
        console.log(`Setting '${prop}' to '${value}'`);
        target[prop] = value;
    }
};

const proxy = new Proxy(person, handler);

console.log(proxy.name); // Logs: Property 'name' was accessed. Output: Faizal
console.log(proxy.name='fa'); // Logs: Property 'name' was accessed. Output: Faizal
console.log(proxy.name); // Logs: Property 'name' was accessed. Output: Faizal
console.log(proxy.age);  // Logs: Property 'age' was accessed. Output: 25
console.log(proxy.gender); // Logs: Property 'gender' was accessed. Output: Property does not exist
