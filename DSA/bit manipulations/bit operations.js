// Bitwise AND
let a = 10; // Binary: 1010
let b = 5;  // Binary: 0101
let result = a & b; // Binary: 0000 (Decimal: 0)
console.log(result);

// Bitwise OR
a = 10; // Binary: 1010
b = 5;  // Binary: 0101
result = a | b; // Binary: 1111 (Decimal: 15)
console.log(result);

// Bitwise XOR
a = 10; // Binary: 1010
b = 5;  // Binary: 0101
result = a ^ b; // Binary: 1111 (Decimal: 15)
console.log(result);

// Bitwise NOT
a = 10; // Binary: 1010
result = ~a; // Binary: 10101 (Decimal: -11)
console.log(result);

// Left Shift
a = 5;  // Binary: 0101
result = a << 2; // Binary: 10100 (Decimal: 20)
console.log(result);

// Right Shift
a = 20; // Binary: 10100
result = a >> 2; // Binary: 0010 (Decimal: 2)
console.log(result);

// Zero-fill Right Shift
a = -10; // Binary: 11110110
result = a >>> 2; // Binary: 00111101 (Decimal: 61)
console.log(result);