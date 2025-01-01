let a=null;
let b;

console.log(a);//null
console.log(b);//undefined

console.log(typeof a);//not an object ,but it will show type='object', it is an error,Actually null is an primitive value.
console.log(typeof b);//undefined


// Primitive Values:               number, bigint, string, boolean, null, undefined, symbol.
// Non-Primitive Values:           object (which includes more specific types like Array, Function, Date, RegExp, Map, and Set). 


// Declaration vs. Assignment: undefined typically means a variable has been declared but not assigned a value. null is an assigned value that explicitly indicates the absence of an object.
// Intentional vs. Unintentional: null is often used intentionally to represent the absence of a value. undefined usually occurs unintentionally when a variable is declared but not assigned.