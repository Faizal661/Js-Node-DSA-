// Type Coercion

// Implicit: Happens automatically by the JavaScript engine.   
// Triggered by: Operators or comparisons involving values of different data types (e.g., +, ==, >, if statements).

console.log('5' + 3  )//results in the string "53" (string concatenation)
console.log(true == 1) //results in true (both are considered "truthy")
if (''){     //evaluates to false (empty string is "falsy")
    console.log('not empty')
}else{
    console.log('empty string')
}






// Type Casting

// Explicit: Done intentionally by the programmer.   
// Methods: Using built-in functions like Number(), String(), Boolean(), parseInt(), parseFloat().

console.log(typeof Number('10')) //converts the string "10" to the number 10
console.log(typeof String(42)) //converts the number 42 to the string "42"
console.log(typeof Boolean(0)) //converts the number 0 to the boolean false
 

