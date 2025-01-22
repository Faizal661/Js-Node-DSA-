// let string1 = 'hello'
let string1 = 'malayalam'
for (i = 0; i <= (string1.length) / 2; i++) {
    if (string1[i] !== string1[string1.length - 1 - i]) {
        return console.log(`${string1} is not a palindrome`);
    }
    return console.log(`${string1} is palindrome`);
}