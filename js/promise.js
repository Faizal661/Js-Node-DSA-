const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = true; //  false to test the reject 

        if (success) {
            resolve('Operation was successful!');
        } else {
            reject('Operation failed!');
        }
    }, 1000);
});


myPromise
    .then((message) => {
        console.log(message); // This will log "Operation was successful!" if the promise is resolved
    })
    .catch((error) => {
        console.error(error); // This will log "Operation failed!" if the promise is rejected
    });