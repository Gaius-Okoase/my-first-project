import { body } from "express-validator";

// Create validation rules
export const validationRules =[
    body('name')
    .notEmpty().withMessage('Name is a required field')
    .trim()
    .isLength({min: 3, max: 50}).withMessage('Name should not be less than 3 characters'),

    body('email')
    .notEmpty().withMessage('Email is a required field')
    .trim()
    .isEmail().withMessage('Please use a valid email address')
    .normalizeEmail(),

    body('age')
    .notEmpty().withMessage('Age is a required field')
    .isInt({min: 1, max: 120}).withMessage('Age should be a positive integer')
] 

