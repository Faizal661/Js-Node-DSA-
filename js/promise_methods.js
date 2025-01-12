// Immediately resolved promise
const resolved = Promise.resolve('Success');

// Immediately rejected promise
const rejected = Promise.reject(new Error('Failed'));



//  then . catch .finally 
fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error))
    .finally(() => console.log('Operation completed'));




//     Promise.all()
// Waits for all promises to resolve
// Rejects if any promise rejects

const promises = [
    fetch('api/users'),
    fetch('api/posts'),
    fetch('api/comments')
];

Promise.all(promises)
    .then(([users, posts, comments]) => {
        // All requests successful
    })
    .catch(error => {
        // Any request failed
    });




//     Promise.race()
// Returns first promise to settle (resolve or reject)

const timeout = new Promise((_, reject) => 
  setTimeout(() => reject(new Error('Timeout')), 5000)
);

const fetchData = fetch('api/data');

Promise.race([fetchData, timeout])
  .then(response => response.json())
  .catch(error => console.error('Error or timeout:', error));




//    Promise.any()
// Returns first promise to fulfill
// Rejects only if all promises reject

const servers = [
    fetch('https://api1.example.com'),
    fetch('https://api2.example.com'),
    fetch('https://api3.example.com')
  ];
  
  Promise.any(servers)
    .then(firstSuccess => console.log('First successful response:', firstSuccess))
    .catch(errors => console.log('All requests failed:', errors));




//   Promise.allSettled()
// Waits for all promises to settle (resolve or reject)
// Never rejects

const promises1 = [
    Promise.resolve(1),
    Promise.reject('error'),
    Promise.resolve(3)
  ];
  
  Promise.allSettled(promises1)
    .then(results => {
      results.forEach(result => {
        if (result.status === 'fulfilled') {
          console.log('Value:', result.value);
        } else {
          console.log('Error:', result.reason);
        }
      });
    });