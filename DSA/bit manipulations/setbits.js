function countSetBits(num) {
    let count = 0;
    while (num > 0) {
      // console.log(num.toString(2),num)
      count += num & 1;
      num >>= 1;
    }
    return count;
  }
  
  const number = 15; // 1111
  const setBits = countSetBits(13);
  console.log("Number of set bits(no of ones):", setBits); // 4