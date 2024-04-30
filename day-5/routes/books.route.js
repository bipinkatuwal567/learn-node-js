import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).send("Books pagess");
})

router.get("/add", (req, res) => {
    res.status(200).json({added: "yes true"})
})

router.get("/delete", (req, res) => {
    res.status(200).json({deleted: true})
})

export default router;