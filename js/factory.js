function createPerson(name, age) {
    return {
      name: name,
      age: age,
      greet: function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
      }
    };
  }
  
  const person1 = createPerson('Alice', 30);
  const person2 = createPerson('Bob', 25);
  const person3 = createPerson('faizal',21)
  
  person1.greet(); // Hello, my name is Alice and I am 30 years old.
  person2.greet(); // Hello, my name is Bob and I am 25 years old.
  person3.greet();