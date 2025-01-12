const os = require('os');

console.log('System Information:');
console.log('OS Type:', os.type());
console.log('Platform:', os.platform());
console.log('CPU Architecture:', os.arch());
console.log('System Uptime (seconds):', os.uptime());
console.log('Total Memory (bytes):', os.totalmem());
console.log('Free Memory (bytes):', os.freemem());
console.log('User Info:', os.userInfo());

console.log(os.cpus());