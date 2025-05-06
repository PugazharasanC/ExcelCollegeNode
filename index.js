import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import userRouter from "./src/routes/userRoutes.js";
import authRouter from "./src/routes/authRoutes.js";

dotenv.config();
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send({
    success: true,
    message: "Hello World From Express App",
    time: new Date().toLocaleString(),
  });
});

app.use("/user", userRouter);
app.use("/auth", authRouter);

const port = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.log("MongoDB Connection Failed", err));

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});




// 
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/PugazharasanC/ExcelExpressDemo.git
// git push -u origin main