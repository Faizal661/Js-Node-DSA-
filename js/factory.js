// A factory function is a function that creates and returns objects. 
// It's an alternative to classes and constructors.


function createPerson(name, age) {
  return {
    name: name,
    age: age,
    greet: function () {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  };
}

const person1 = createPerson('Alice', 30);
const person2 = createPerson('Bob', 25);
const person3 = createPerson('faizal', 21)

// person1.greet(); // Hello, my name is Alice and I am 30 years old.
// person2.greet(); // Hello, my name is Bob and I am 25 years old.
// person3.greet();



// Factory with private variables
function createCounter() {
  let count = 0;  // Private variable

  return {
    increment() { count++; },
    decrement() { count--; },
    getCount() { return count; }
  };
}

const counter = createCounter();
counter.increment();
console.log(counter.getCount());  // 1
console.log(counter.count);       // undefined (private)