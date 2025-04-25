import express from "express";
import { Server } from "http";

const app = express();
const server = new Server(app);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

server.listen(3000, () => {
    console.log("Server is running on port 3000");
    }
);