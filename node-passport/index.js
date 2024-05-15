import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("<a href='/auth/google'>Sign in with google</a>");
});

app.listen(8000, () => {
  console.log("Server has started🚀");
});
