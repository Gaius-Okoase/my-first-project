//* Getting required modules.
const fs = require('fs');

//* Script to read file.
fs.readFile('./Files/hello.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log('ERROR:', err);
    } else {
        console.log(`The file contains:\n"${data}"`);
    }
    return;
})
