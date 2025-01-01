const cluster = require('cluster')


if (cluster.isMaster) {
    const numCPUs = require('os').cpus().length;
    console.log(numCPUs)

    for (let i = 0; i < numCPUs; i++) {
        cluster.fork()
    }
} else {
    // Worker process code here
}


