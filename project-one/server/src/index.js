import express from "express";
import connection from "./models/index.js";
import bookRoute from "./routes/bookRoute.js";
import "dotenv/config";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Backend is working");
});

app.use("/book", bookRoute);

app.listen(process.env.PORT || 8000, async () => {
  console.log("Server has be started 🚀");

  try {
    await connection.authenticate();
    connection.sync();
    console.log("Successfully connected to DB");
  } catch (err) {
    console.error("Uanble to connect to the database ", err);
  }
});
