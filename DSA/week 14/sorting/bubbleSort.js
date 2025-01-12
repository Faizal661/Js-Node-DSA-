
//Bubble Sort	O(n)	O(n^2)	O(n^2)

function bubbleSort(arr) {
    let swap
    do {
        swap = false
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
                swap = true
            }
        }
    } while (swap);
    return arr
}


const arr = [-6, 3, -12, 34, 0, 121, 43]
// console.log(bubbleSort(arr))

function bubbleSortStrings(arr) {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

const words = ["cherry", "banana", "apple", "date"];
// console.log(words); 
// bubbleSortStrings(words);
// console.log(words); 

const studentGrades = [85, 92, 78, 90, 88];

function bubbleSortDescending(grades) {
  const n = grades.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (grades[j] < grades[j + 1]) {
        const temp = grades[j];
        grades[j] = grades[j + 1];
        grades[j + 1] = temp;
      }
    }
  }
}

bubbleSortDescending(studentGrades);
console.log(studentGrades);