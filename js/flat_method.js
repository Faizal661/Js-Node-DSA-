let arr=[1,2,3,4,5,[1,2,3,4,5,[1,2,3,4,5,[2,3,3,4],6,7,8,],7,6,5,]]

// let flattedArr=arr.flat(1)
let flattedArr=arr.flat(Infinity)

console.log(flattedArr);
