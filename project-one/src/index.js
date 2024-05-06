import express from "express";

const app = express();

app.use("/", (req, res) => {
    res.send("Backend is working");
})

app.listen(8000, () => {
    console.log("Server has be started 🚀");
})