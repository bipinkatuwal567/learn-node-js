import express from "express";
import connection from "./models/index.js";

const app = express();

app.use("/", (req, res) => {
    res.send("Backend is working");
})

app.listen(8000, async() => {
    console.log("Server has be started 🚀");

    try{
        await connection.authenticate();
        console.log("Successfully connected to DB");
    }catch(err){
        console.error("Uanble to connect to the database ", err);
    }
})