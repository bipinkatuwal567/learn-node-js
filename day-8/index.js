import express from "express";
import mysql from "mysql2";

const app = express();
let connection;

app.get("/user/add", (req, res) => {
  console.log(req.params);
  res.end("Hey")
});

app.listen(8000, () => {
  console.log("Server has started");
  // connection = mysql.createConnection({
  //   host: "localhost",
  //   user: "root",
  //   password: "forest#123@cat",
  //   database: "test",
  // });
});
