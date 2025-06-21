import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 8080;

//Middleware to parse JSON
app.use(express.json());
//Middleware to log incoming request
app.use((req, res, next) => {
    res.send(`Received request for ${req.url} with ${req.method}`);
    next();
});

//Set up PORT to listen to server
app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
})
