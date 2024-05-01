import express from "express";
import validateToken from "../middlewares/validateToken.js";

const router = express.Router();

router.use((req, res, next) => {
  validateToken(req, res, next);
});

router.get("/", (req, res) => {
  const { id, author } = req.query;

  res.status(200).send("Books pagess");
});

router.get("/add", (req, res) => {
  res.status(200).json({ added: "book added" });
});

router.get("/delete/:id", (req, res) => {
  console.log(req.params);
  res.status(200).json({ deleted: true });
});

export default router;
