let n = 6;

for (let i = 1; i <= n; i++) {
  // Print spaces before the stars
  for (let j = 1; j <= n - i; j++) {
    console.log(' ');
  }

  // Print stars for the current row
  for (let k = 1; k <= i; k++) {
    console.log('*');
  }

  // Move to the next line after printing the row
  console.log('\n');
}