/**

* User Registration Controller
*
* Validates incoming user data, checks for existing email addresses,
* hashes the password, creates a user record in MongoDB, and generates
* a JWT authentication token.
*
* @async
* @function userController
* @param {import("express").Request} req - Express request object.
* @param {import("express").Response} res - Express response object.
* @param {import("express").NextFunction} next - Express next middleware function.
* @returns {Promise<import("express").Response>} Sends an HTTP response.
*
* @response 201 - User registered successfully.
* @response 400 - Request validation failed.
* @response 409 - Email is already registered.
* @response 500 - Internal server error.
  */

import { validationResult } from "express-validator";
import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userController = async (req, res, next) => {
    try {
        const errors = validationResult(req);


        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                errors: errors.array()
            });
        }

        const { firstName, lastName, email, password } = req.body;

        const existingUser = await userModel.findOne({ email });

        if (existingUser) {
            return res.status(409).json({
                success: false,
                message: "Email is already registered"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await userModel.create({
            firstName,
            lastName,
            email,
            password: hashedPassword
        });

        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        );

        return res.status(201).json({
            success: true,
            message: "User registered successfully",
            token,
            user: {
                id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email
            }
        });
    } catch (error) {
        console.error("Error in userController:", error);

        if (error.code === 11000) {
            return res.status(409).json({
                success: false,
                message: "Email is already registered"
            });
        }

        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }


};

export default userController;
