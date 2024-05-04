import express from "express";
import mysql from "mysql2";
import router from "./routes/userRouter.js";

const app = express();
app.use(express.json());

app.use("/user", router);



app.listen(8000, () => {
  console.log("Server has started");
});
