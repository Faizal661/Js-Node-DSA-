let person = { name: "Alice" };
let details = { age: 30, city: "Wonderland" };

let merged = Object.assign(person, details);   //merge arrays
console.log(merged);


// let person = { name: "Alice", details: { age: 30, city: "Wonderland" } };  //deep copy
// let deepCopy = JSON.parse(JSON.stringify(person));
// console.log(deepCopy); // { name: 'Alice', details: { age: 30, city: 'Wonderland' } }



    