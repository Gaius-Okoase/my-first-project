import express from "express";
import dotenv from "dotenv";
import client from "./config/db.js";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 8080;

//Middleware to parse JSON
app.use(express.json());
//Middleware to log incoming request
app.use((req, res, next) => {
    console.log(`Received request for ${req.url} with ${req.method}`);
    next();
});

//Logic to set key-value pair
app.get('/set', async (req, res) => {
    try {
        await client.set('language', 'JavaScript');
        return res.status(200).json({message: "Language added!"});
    } catch (error) {
        console.log('Error setting key-value pair on Redis', error);
        return res.status(500).json({error: error.message});
    }
});
//Logic to get key-value pair
app.get('/get', async (req, res) => {
    try {
        const language = await client.get('language');
        return res.status(200).json(`Language added: ${language}`);
    } catch (error) {
        console.log('Error getting key-value pair on Redis', error);
        return res.status(500).json({error: error.message});
    }
})

//Set up PORT to listen to server
app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
})
