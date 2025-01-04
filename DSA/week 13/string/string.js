let str = "Hello, world!";
// console.log(str)

// Concatenation
let newStr = str + " How are you?";
// console.log(newStr)

// Accessing characters
let firstChar = str[0];
// console.log(firstChar)

// String length
let length = str.length;
// console.log(length)

// Substring extraction
let subStr = str.substring(7, 12);
// console.log(subStr)


// Case conversion
let upperStr = str.toUpperCase();
let lowerStr = str.toLowerCase();
// console.log(upperStr)
// console.log(lowerStr)

// Searching for substrings
let index = str.lastIndexOf("l"); //indexOf for first ,lastIndexOf for last ,
// console.log(index)

// Replacing substrings
let replacedStr = str.replace("world", "there");
// console.log(replacedStr)

// Trimming whitespace
let trimmedStr = str.trim(); //trimStart ,trimEnd ,trim
// console.log(trimmedStr)

// Splitting strings
let words = str.split(" ");
// console.log(words)

// Joining array elements
// let joinedStr = words.join(" ");
// console.log(joinedStr)

// Template literals
let formattedStr = `The string is ${str}`;
// console.log(formattedStr)

let char = str.charAt(0); // Returns "e" 
// console.log(char);

let code = str.charCodeAt(0); // Returns 72 (ASCII code for "H")
// console.log(code);

// let str1 = "Hello";
// let str2 = "world";
// let joinedStr = str1.concat(", ", str2); // Returns "Hello, world"
// console.log(joinedStr);

let contains = str.includes("world"); // Returns true
// console.log(contains);

let str1 = "The quick brown fox jumps over the lazy dog the the the the";
let matches = str1.match(/the/g); // Returns ["fox", "fox"]
// console.log(matches.length);


function replaceAlphabets(str, n) {
    const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = "";
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        const index = alphabet.indexOf(char);
        if (index !== -1) {
            const newIndex = (index + n + alphabet.length) % alphabet.length;
            result += alphabet[newIndex];
        } else {
            result += char;
        }
    }
    return result;
}
const inputString = "Good morning";
const shift = 2;
const outputString = replaceAlphabets(inputString, shift);
console.log('Replaced String:', outputString); 