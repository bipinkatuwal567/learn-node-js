import { Router } from "express";
import BlogController from "../controllers/blogController.js";

const router = Router();
const blogController = new BlogController();

router.get("/add", blogController.addBlog);

router.get("/get/:id", blogController.getBlog);

router.get("/update/:id", blogController.updateBlog);

router.get("/delete/:id", blogController.deleteBlog);

export default router;
