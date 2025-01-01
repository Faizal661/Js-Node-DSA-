//----------------Seal-----

let objSeal = {
    name: 'Alice',
    age: 30
};

Object.seal(objSeal);

objSeal.name = 'Bob'; // Allowed
delete objSeal.age;   // Not allowed, returns false
objSeal.newProp = 'new'; // Not allowed

console.log(objSeal); // { name: 'Bob', age: 30 }
console.log(Object.isSealed(objSeal)); // true



//----------------Feeze-----

let objFreeze = {
    name: 'Alice', 
    age: 30
};

Object.freeze(objFreeze);

objFreeze.name = 'Bob'; // Not allowed, silently fails in non-strict mode
delete objFreeze.age;   // Not allowed, returns false
objFreeze.newProp = 'new'; // Not allowed

console.log(objFreeze); // { name: 'Alice', age: 30 }
console.log(Object.isFrozen(objFreeze)); // true
