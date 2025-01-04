

const numbers = [1, 3, 5, 7, 9, 5, 5, 5, 34, -123];

console.log(linearSearch(numbers));

function linearSearch(arr) {
    console.log(`Maximum element in the array is : `)
    let max = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max;
}