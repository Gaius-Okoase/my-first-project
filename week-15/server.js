// Import all necessary modules
import express from 'express';
import dotenv from 'dotenv';
import connectDb from './config/db.js';
import userRouter from './routers/userRouter.js'

// Instantiate express 
const app = express();
// Configure dotenv
dotenv.config();
// Connect server to database
connectDb();
// Set up PORT
const PORT = process.env.PORT || 5000;

//! Middlewares
//Middleware to parse JSON data
app.use(express.json());
// Middleware to log request to console
app.use((req, res, next) => {
  console.log(`Received request for ${req.url} with ${req.method}`);
  next(); //* If you don't call next, your server won't move to the next step!
});

//Routers
app.use('/', userRouter);

// Set up port to listen to server 
app.listen(PORT, () => {
  console.log(`Server started on localhost:${PORT}`);
});