let a=null;
let b;

console.log(a);//null
console.log(b);//undefined

console.log(typeof a);//not an object ,but it will show type='object', it is an error,Actually null is an primitive value.
console.log(typeof b);//undefined


// Primitive Values:               number, bigint, string, boolean, null, undefined, symbol.
// Non-Primitive Values:           object (which includes more specific types like Array, Function, Date, RegExp, Map, and Set).