// Function composition => is a powerful technique in functional programming where you combine multiple functions to create a new, more complex function. It's like chaining functions together, where the output of one function becomes the input of the next.


// Define individual functions
const add5 = (x) => x + 5;
const multiplyBy2 = (x) => x * 2;

// Compose the functions
const composedFunction = (x) => add5(multiplyBy2(x));

// Test the composed function
console.log(composedFunction(3)); // Output: 11