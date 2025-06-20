import { Users } from "../models/userModel.js";
import { validationResult } from "express-validator";

// Controller logic to add users
export const addUsers = async (req, res, next) => {
    // Logic to catch errors from wrong input
    const errors = validationResult(req);
    // Check if errors exist
    if(!errors.isEmpty()) {
        return res.status(400).json({
            success: false,
            errors: errors.array()
        });
        next();
    }
    try {
        const {name, email, age} = req.body;
        // Check if email exists 
        const emailExists = (await Users.findOne({email: email}));
        if(emailExists) {
            return res.status(400).json({
                success: false,
                error: "Email taken by another user."
            });
        }
        // Create and add user to the database if all conditions are met
        const newUser = {name, email, age};
        await Users.create(newUser);
        return res.status(201).json({
            success: true,
            message: "You have been added as a user!"
        });   
    } catch (error) {
        console.error('Failed to add user!', error);
        return res.status(500).json({
            success: false,
            error: error.message
        });
        next();
    }
}

// Controller logic to fetch and print users
export const getAllUsers = async (req, res, next) => {
    try {
        const users = await Users.find().sort({createdAt : -1});
        return res.status(200).json({
            success: true,
            listOfUsers: users.length,
            users: users    
        })
    } catch (error) {
        console.error('Failed to get all users', error);
        return res.status(500).json({
            success: false,
            error: error.message
        });
    }
}
