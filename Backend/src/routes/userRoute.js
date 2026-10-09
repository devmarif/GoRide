/**

* User Routes
*
* Defines API endpoints related to user operations.
*
* @module userRouter
* @requires express
* @requires userController
* @requires userValidation
*
* @route POST /register
* @description Validates user registration data and registers a new user.
* @access Public
  */

import { Router } from "express";
import userController from "../controllers/userController.js";
import userValidation from "../validations/userValidation.js";

const userRouter = Router();

userRouter.post("/register", userValidation, userController);

export default userRouter;
