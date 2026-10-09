/**

* User Model
*
* Defines the MongoDB schema for users in the GoRide application.
* Stores user identity details, unique email addresses, hashed passwords,
* and Socket.IO connection IDs for real-time communication.
*
* @module userModel
* @requires mongoose
  */

import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minlength: [3, "First name must be at least 3 characters long"]
    },
    lastName: {
        type: String,
        required: true,
        minlength: [3, "Last name must be at least 3 characters long"]
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: [6, "Password must be at least 6 characters long"]
    },
    socketIoId: {
        type: String,
        default: null
    }
});

const userModel = mongoose.model("User", userSchema);

export default userModel;
