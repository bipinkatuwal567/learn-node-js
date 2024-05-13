import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import blogModel from "./models/schema.js";

const app = express();

app.get("/add-book", async(req, res) => {
    try{
        const response = await blogModel.create({
            title: "Title Two",
            description: "Description Two",
        })
        res.json(response)
    }catch(err){
        res.json({
            success: false,
            message: err.message
        })
    }
})

app.listen(8000, async () => {
  console.log("Server has started!🚀");
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTION_URL);
    console.log("Connected t database💻");
  } catch (err) {
    console.log(err.message);
  }
});
