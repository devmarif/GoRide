import mongoose from "mongoose";

/**

* Establishes a connection to the MongoDB database.
*
* Uses the MONGODB_URI environment variable to connect.
* Logs a success message when the connection is established.
* Throws the error if the connection fails so the server
* can handle the failure appropriately.
*
* @async
* @function connectDb
* @returns {Promise<void>} Resolves when MongoDB is connected.
* @throws {Error} If the database connection fails.
  */
const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connection To The Database Is Successful");
    } catch (error) {
        console.error("Database Connection Failed:", error);
        throw error;
    }
};

export default connectDb;
