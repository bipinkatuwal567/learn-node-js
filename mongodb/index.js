import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import blogModel from "./models/schema.js";

const app = express();

// Create operation
app.get("/add-blog", async (req, res) => {
  try {
    const response = await blogModel.create({
      title: "Title Two",
      description: "Description Two",
    });
    res.json(response);
  } catch (err) {
    res.json({
      success: false,
      message: err.message,
    });
  }
});

// Read operatoin
app.get("/get-blog/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const response = await blogModel.findById(id);
    res.json(response);
  } catch (err) {
    res.json({
      success: false,
      message: err.message,
    });
  }
});

// Update operation
app.get("/update-blog/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const response = await blogModel.findOne({
        _id: id,
    });
    /* We can update data in mongoose using this */
    response.title = "Updated title"
    response.save();

    res.json(response);
  } catch (err) {
    res.json({
      success: false,
      message: err.message,
    });
  }
});


app.listen(8000, async () => {
  console.log("Server has started!🚀");
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTION_URL);
    console.log("Connected t database💻");
  } catch (err) {
    console.log(err.message);
  }
});
