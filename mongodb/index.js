import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import blogRouter from "./routes/blogRouter.js"

const app = express();

app.use(express.json());

app.use("/blog", blogRouter);

app.listen(8000, async () => {
  console.log("Server has started!🚀");
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTION_URL);
    console.log("Connected t database💻");
  } catch (err) {
    console.log(err.message);
  }
});
