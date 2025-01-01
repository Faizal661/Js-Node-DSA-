let n = 6;

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n - i; j++) {
    console.log(' ');
  }

  for (let k = 1; k <= i; k++) {
    console.log('*');
  }
  console.log('\n');
}