import express from "express";
import connectToMongodb from "./db/connectToMongodb.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000

app.use(express.json()); //to parse data from req.body
app.use(cookieParser()); //to parse cookies from req.cookies


app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);
app.use("/api/users", userRoutes);

app.listen(PORT, ()=>{
    connectToMongodb();
    console.log(`⚙️  server running on port :`,PORT);
})

