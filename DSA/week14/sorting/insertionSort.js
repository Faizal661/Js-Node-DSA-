
//Insertion Sort	O(n)	O(n^2)	O(n^2)

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let nti = arr[i];
        let j = i - 1
        while (j >= 0 && arr[j] > nti) {
            arr[j + 1] = arr[j]
            j--
        }
        arr[j + 1] = nti
    }
    return arr
}

// const arr = [8, -2, 20, 4, -6]
// console.log(insertionSort(arr))

function insertionSortDescending(arr) {
    const n = arr.length;

    for (let i = 1; i < n; i++) {
        let key = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] < key) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = key;
    }
    return arr
}
// console.log(insertionSortDescending(arr))

function insertionSortStrings(arr) {
    const n = arr.length;

    for (let i = 1; i < n; i++) {
        let key = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = key;
    }
    return arr       
}

const arr= ["cherry", "banana", "apple", "date"];
console.log()
console.log(insertionSortStrings(arr))
console.log()
          