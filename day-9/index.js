import express from "express";
import router from "./routes/userRouter.js";
import connection from "./models/index.js";

const app = express();
app.use(express.json());

app.use("/user", router);

app.listen(8000, async () => {
  console.log("Server has started");

  try {
    await connection.authenticate();
    await connection.sync();
    console.log("Connection has been established successfully");
  } catch (err) {
    console.error("Unable to connect to the database", err);
  }
});
