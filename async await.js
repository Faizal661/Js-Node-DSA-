// promise 

function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data fetched');
        }, 2000);
    });
}

// fetchData()
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => {
//         console.error(error);
//     });

//async await 

async function fetchDataAsync() {
    try {
        const data = await fetchData();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

fetchDataAsync();