const { exec, spawn, fork, execFile } = require('child_process');
// The child_process module in Node.js allows you to create and control child processes, enabling you to execute system commands, run scripts, or spawn other programs from your Node.js application.
// interact with the underlying operating system or external tools.


// Executes a command in a shell and buffers the output.


exec('dir', (error, stdout, stderr) => {
    if (error) {
        console.error(`Error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.error(`Stderr: ${stderr}`);
        return;
    }
    console.log(`Stdout: ${stdout}`);
});



// Spawns a new process with the given command and arguments. It streams the output, making it suitable for large outputs.

const child = spawn('dir');

child.stdout.on('data', (data) => {
  console.log(`Stdout: ${data}`);
});

child.stderr.on('data', (data) => {
  console.error(`Stderr: ${data}`);
});

child.on('close', (code) => {
  console.log(`Child process exited with code ${code}`);
});



execFile('node', ['--version'], (error, stdout, stderr) => {
    if (error) {
        console.error(`Error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.error(`Stderr: ${stderr}`);
        return;
    }
    console.log(`Stdout: ${stdout}`);
});



// Spawns a new Node.js process to execute a module. This is designed for inter-process communication (IPC).


const child2 = fork('./Node/cluster.js');

child2.on('message', (message) => {
  console.log('Message from child:', message);
});

child2.send({ greeting: 'Hello from parent' });
