import express from "express";
import dotenv from "dotenv";
// import http from "http";
import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js"


// const app = express();

import ConnectToMongoDb from "./db/ConnectToMongoDb.js";
import cookieParser from "cookie-parser";

import { app,server } from "./socket/socket.js";

const PORT = process.env.PORT || 8000
dotenv.config();


// app.get("/",(req,res)=>{
//     res.send("hi")
// })

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes)
app.use("/api/users",userRoutes)



server.listen(PORT,()=>{
    ConnectToMongoDb();
    console.log(`Server is running on port ${PORT}`);
})