
import app from "./src/app.js";
import http from "http";

const server = http.createServer(app);

const serverStart = () => {
    try {
        server.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        });
    } catch (err) {
        console.error("Error starting server:", err);
    }
};

serverStart();