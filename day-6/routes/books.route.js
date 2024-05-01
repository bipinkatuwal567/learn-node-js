import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  const { id, author } = req.query;

  res.status(200).send("Books pagess");
});

router.get("/add", (req, res) => {
  res.status(200).json({ added: "yes true" });
});

router.get("/delete/:id", (req, res) => {
    console.log(req.params);
  res.status(200).json({ deleted: true });
});

export default router;
