/**

* User Validation Middleware
*
* Defines validation rules for user registration requests using
* express-validator. Validates email format, password length,
* and required first and last names.
*
* @module userValidation
* @requires express-validator
* @exports userValidation
  */

import { body } from "express-validator";

const userValidation = [
    body("email")
        .isEmail()
        .withMessage("Invalid email address")
        .bail(),


    body("password")
        .isLength({ min: 6 })
        .withMessage("Password must be at least 6 characters long")
        .bail(),

    body("firstName")
        .trim()
        .notEmpty()
        .withMessage("First name is required")
        .bail()
        .isLength({ min: 3 })
        .withMessage("First name must be at least 3 characters long")
        .bail(),

    body("lastName")
        .trim()
        .notEmpty()
        .withMessage("Last name is required")
        .bail()
        .isLength({ min: 3 })
        .withMessage("Last name must be at least 3 characters long")
        .bail()


];

export default userValidation;
