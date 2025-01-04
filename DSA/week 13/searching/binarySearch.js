//    Find the index of a given number in a sorted array:
const sortedNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1; 
}
const target1 = 3;
const target2 = 7;
console.log(binarySearch(sortedNumbers, target1));
console.log(binarySearch(sortedNumbers, target2));


//Find the first occurrence of a given element in a sorted array:
// function binarySearchFirstOccurrence(arr, target) {
//     let left = 0;
//     let right = arr.length - 1;
//     let result = -1;
//     while (left <= right) {
//         const mid = Math.floor((left + right) / 2);
//         if (arr[mid] === target) {
//             result = mid;
//             right = mid - 1;
//         } else if (arr[mid] < target) {
//             left = mid + 1;
//         } else {
//             right = mid - 1;
//         }
//     } 
//     return result;
// }
// const sortedNumbers = [  1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const target1 = 6;
// console.log(binarySearchFirstOccurrence(sortedNumbers, target1));


// function sqrtBinarySearch(number) {
//     let low = 0;
//     let high = number;
//     let precision = 0.1;

//     while (high - low > precision) {
//         let mid = (low + high) / 2;
//         let midSquared = mid * mid;

//         if (midSquared > number) {
//             high = mid;
//         } else {
//             low = mid;
//         }
//         // console.log('high',high,'low',low)
//     }
//     console.log('returning low',low)
//     return low;
// }

// sqrtBinarySearch(16)