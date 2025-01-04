//Merge Sort	O(n log n)	O(n log n)	O(n log n)

const arr = [0, -6, 4, 12, -2, 8]

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr
    }
    let mid = Math.floor(arr.length / 2)
    let leftArr = arr.slice(0, mid)
    let rightArr = arr.slice(mid)
    return merge(mergeSort(leftArr), mergeSort(rightArr))
}

function merge(leftArr, rightArr) {
    let sortedArr = [];
    while (leftArr.length && rightArr.length) {
        if (leftArr[0] <= rightArr[0]) {
            sortedArr.push(leftArr.shift())
        } else {
            sortedArr.push(rightArr.shift())
        }
    }
    return [...sortedArr, ...leftArr, ...rightArr]
}





function mergeSortStrings(str) {
    if (str.length <= 1) {
        return str;
    }
    const middle = Math.floor(str.length / 2);
    const leftHalf = str.substring(0, middle);
    const rightHalf = str.substring(middle);

    return mergeStrings(mergeSortStrings(leftHalf), mergeSortStrings(rightHalf)).join('');
}
function mergeStrings(left, right) {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] <= right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

const inputString = "hello world";
const sortedString = mergeSortStrings(inputString);
console.log(sortedString);

// console.log(arr)            
// console.log()
// console.log(mergeSort(arr))   