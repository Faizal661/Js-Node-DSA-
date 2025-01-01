//====================> promise 

function fetchData() {
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

// fetchData()
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => {
//         console.error(error);
//     });



//=============> async await 

async function fetchDataAsync() {
    try {
        const data = await fetchData();
        console.log(data);
    } catch (error) {
        console.error(error);
    }finally{
        console.log('end..')
    }
}

fetchDataAsync();