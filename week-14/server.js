// Import all necessary packages/modules
import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

// Access .env
dotenv.config();
// Instantiate express
const app = express();

// Set up PORT and MONGP_URI
const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URI;

// Connect to MongoDB
mongoose.connect(MONGO_URI)
.then(() => {
    console.log(`Successfully connected to MongoDB.`);
})
.catch((err) => {
    console.log('Failed to connect to the database.');
    console.error('Error: ', err);
});

app.listen(PORT, () => {
    console.log('Server is running on localhost:' + PORT);
});

