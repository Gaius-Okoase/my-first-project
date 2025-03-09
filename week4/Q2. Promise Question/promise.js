/*Honestly, I don't fully understand callback, promise, async and await. I'll keep reading on it though. */
function getFullResponseFromAPI(success) {
    return new Promise((resolve, reject) => {
        if (success) {
            resolve({ status: 200, body: 'success' });
        } else {
            reject(new Error('The API is not working'));
        }
    });
}

// Try to call the getFullResponseFromAPI function with success as true and then false.
getFullResponseFromAPI(true)
    .then(response => console.log(response))
    .catch(error => console.log(error.message));

getFullResponseFromAPI(false)
    .then(response => console.log(response))
    .catch(error => console.log(error.message));

