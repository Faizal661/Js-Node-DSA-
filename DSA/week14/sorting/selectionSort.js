//Selection Sort	O(n^2)	O(n^2)	O(n^2)

function selectionSort(arr) {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        const temp = arr[minIndex];
        arr[minIndex] = arr[i];
        arr[i] = temp;
    }
}

const numbers = [5, 2, 8, 1, 9];
//   selectionSort(numbers);
//   console.log(numbers);          


function selectionSortDescending(arr) {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let maxIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] > arr[maxIndex]) {
                maxIndex = j;
            }
        }
        const temp = arr[maxIndex];
        arr[maxIndex] = arr[i];
        arr[i] = temp;
    }
}

const words = ["apple", "banana", "cherry", "date"];


function selectionSortObjects(arr, property) {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j][property] < arr[minIndex][property]) {
                minIndex = j;
            }
        }
        const temp = arr[minIndex];
        arr[minIndex] = arr[i];
        arr[i] = temp;
    }
}
const students = [
    { name: "Alice", age: 20 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 18 },
];

selectionSortObjects(students, "name");
console.log(students);      