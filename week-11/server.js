const express = require('express'); // Import express.js

const app = express(); //Instantiate an express.js app

PORT = 5000; //Set up port to listen to server

app.get('/', (req, res) => {
    console.log(`Received request for ${req.url}`);
    res.send(`Hello, Express!`);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});