import express from "express";
import dotenv from "dotenv";
import cors from "cors";

const cors = express

const app = express();
dotenv.config({ path: "./config.env" });

app.use(
    cors({
        origin: [process.env.FRONTEND_URL],
        method: ["POST"],
        credentials: true,
    })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


export default app;