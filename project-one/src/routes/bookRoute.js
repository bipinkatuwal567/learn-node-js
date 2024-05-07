import { Router } from "express";
import bookModel from "../models/bookModel.js";

const router = Router();

router.post("/add", async (req, res) => {
  console.log(req.body);
  const data = await bookModel.create(req.body);
  console.log(data);

  if(data){
      res.json(data);
  }else{
      res.json({sucess: false, message: "Error during adding book"})
  }
});
export default router;
