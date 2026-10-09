/**

* GoRide Backend Server
*
* Loads environment variables, initializes the HTTP server,
* establishes a MongoDB connection, and starts listening on
* the configured port after a successful database connection.
*
* @module server
* @requires http
* @requires dotenv
* @requires app
* @requires connectDb
  */

import app from "./src/app.js";
import http from "http";
import dotenv from "dotenv";
import connectDb from "./src/configs/dbConnection.js";

dotenv.config();

const server = http.createServer(app);

const serverStart = async () => {
    try {
        await connectDb();
        server.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT} `);
        });
    } catch (err) {
        console.error("Error starting server:", err);
    }


};

serverStart();
