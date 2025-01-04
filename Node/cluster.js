// help create child processes (workers) that share the same server port, making it ideal for optimizing multi-core CPU usage

const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length; // Get the number of CPU cores

if (cluster.isMaster) {
  // Master process
  console.log(`Master ${process.pid} is running`);

  // Fork workers for each CPU core
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  // Handle worker process events
  // cluster.on('exit', (worker, code, signal) => {
  //   console.log(`Worker ${worker.process.pid} died`);
  // });
} else {
  // Child process
  console.log(`Worker ${process.pid} started`);

  // // Create an HTTP server in each child process 
  // http.createServer((req, res) => {
  //   res.writeHead(200);
  //   res.end('Hello, Node.js!');
  // }).listen(8000);

  // console.log(`Worker ${process.pid} is listening on port 8000`);
}
