const express = require('express'); // Import express.js

const app = express(); //Instantiate an express.js app

PORT = 5000; //Set up port to listen to server

app.get('/', (req, res) => {
    console.log(`Received request for ${req.url}`);
    res.send(`Hello, Express!`);
});

//* Week 13 Assignment - (a) Defining a user/:id route
app.get('/user/:id', (req, res) => {
    const id = req.params.id;
    // if(!id){
    //     return res.status(400).json({error: "Please input user id."});
    // }

    return res.status(200).json({
        id: id,
        name: "Goat"
    });
});

//* Week 13 Assignment - (b) Defining a /search route
app.get('/search', (req, res) => {
     const name = req.query.name;
    // if(!name){
    //     return res.status(400).json({error: "Please input user name."});
    // }

    return res.status(200).json({
        id: 1,
        name: name
    });
});
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});