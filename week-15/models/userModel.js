import mongoose from "mongoose";
import validator from "validator"; 

// Create User Schema
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        trim: true,
        minlength: 3,
        maxlength: 50
    },
    email: {
        type: String,
        require: true,
        trim: true,
        unique: true,
        validate: validator.isEmail
    },
    age: {
        type: Number,
        require: true,
        trim: true,
        validate: Number.isInteger,
        min: 1,
        max: 120
    }
}, {
    timestamps: true
});

// Create database model using User Schema
export const Users = mongoose.model('User', UserSchema);
