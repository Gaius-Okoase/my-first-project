//* Importing the required modules
const fs = require('fs');
const path = require('path');

//* Creating a directory if it doesn't exist, creating a file, and writing a file in it in one go.
fs.mkdir ('Files', {recursive: true}, (err) => {
    if (err) {
        console.log('ERROR:', err)
        return;
    } else {
        console.log("Directory created successfully!");
    }

    //* Creating the file and writing into it.
    fs.writeFile('./Files/hello.txt', 'Hello, File System.', 'utf-8', (err) => {
        if (err) throw err;
        console.log('File created and written into successfully!');
        return;
    }); 
});

//* 