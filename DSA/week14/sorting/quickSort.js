//Quick Sort	O(n log n)	O(n log n)	O(n^2)

function quickSortDescending(arr) {
    if (arr.length < 2) {
        return arr
    }
    let pivot = arr[arr.length - 1]
    let left = []
    let right = []
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return [...quickSortDescending(left), pivot, ...quickSortDescending(right)]
}

// const arr = [8, - 4, 20, -6, 2]
// console.log('Unsorted Array', arr)
// console.log('Sorted Array  ',quickSortDescending(arr))   


// function quickSortObjects(arr, property) {
//     if (arr.length <= 1) {
//         return arr;
//     }
//     const pivot = arr[arr.length - 1];
//     const left = [];
//     const right = [];
//     for (let i = 0; i < arr.length - 1; i++) {
//         if (arr[i][property] < pivot[property]) {
//             left.push(arr[i]);
//         } else {
//             right.push(arr[i]);
//         }
//     }
//     return [...quickSortObjects(left, property), pivot, ...quickSortObjects(right, property)];
// }

// const students = [
//     { name: "Alice", age: 20 },
//     { name: "Bob", age: 25 },
//     { name: "Charlie", age: 18 },
// ];
// console.log(students);   
// const sortedStudents = quickSortObjects(students, "age");
// console.log(sortedStudents);