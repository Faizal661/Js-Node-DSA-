// Promises are objects representing eventual completion/failure of an asynchronous operation.
// They have three states: pending, fulfilled, rejected.

function fetchDataPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() > 0.5;
            if (success) {
                resolve({ id: 1, name: 'Example' });
            } else {
                reject(new Error('Failed to fetch data'));
            }
        }, 1000);
    });
}

// fetchDataPromise()
//     .then(data => console.log(data))
//     .catch(error => console.error(error));


async function fetchDataAsync() {
    try {
        const data = await fetchDataPromise();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}
fetchDataAsync()