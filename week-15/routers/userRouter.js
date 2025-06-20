import express from "express";
import { validationRules } from "../middleware/validationMiddleware.js";
import { addUsers, getAllUsers } from "../controllers/userController.js";

// Instantiate Router
const router = express.Router();

// Create endpoint with respective HTTP method
router.post('/add-user', validationRules, addUsers);
router.get('/users', getAllUsers);

export default router;

//! Oh, it's in the server already. Let's test then.