const nums=[5,4,2,3]

function mergeSort(nums){
    if(nums.length<=1){
        return nums
    }
    let mid=Math.floor(nums.length/2)
    let left=nums.slice(0,mid)
    let right=nums.slice(mid)
    return merge(mergeSort(left),mergeSort(right))
}
function merge(left,right){
    let sortedArr=[]
    while(left.length&&right.length){
        if(left[0]<=right[0]){
            sortedArr.push(left.shift())
        }else{
            sortedArr.push(right.shift())
        }
    }
    return [...sortedArr,...left,...right]
}

const sorted=mergeSort(nums)

console.log('sorted==',sorted)


for (let i = 0; i < sorted.length; i+=2) {
    let temp = sorted[i]
    sorted[i] = sorted[i + 1]
    sorted[i + 1] = temp
}
console.log('final array',sorted)
