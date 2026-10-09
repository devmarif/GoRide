/**

* Express Application Configuration
*
* Initializes the Express application, configures JSON request-body
* parsing, and registers the user authentication routes.
*
* @module app
* @requires express
* @requires userRouter
*
* @route /api/auth
* @description Base path for user authentication endpoints.
  */

import express from "express";
import userRouter from "./routes/userRoute.js";

const app = express();

app.use(express.json());

app.use("/api/auth", userRouter);

export default app;
