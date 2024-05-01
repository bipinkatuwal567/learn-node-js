import express from "express";
import booksRouter from "./routes/books.route.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.post("/", (req, res) => {
  console.log(req.body);
  console.log(req.query);
  res.status(200).send("Backend is working");
});

app.use("/books", booksRouter);

app.listen(8000, () => {
  console.log("Server has started");
});
