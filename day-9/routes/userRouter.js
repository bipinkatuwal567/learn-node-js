import express from "express";
import UserController from "../controllers/userController.js";

const router = express.Router();
const userController = new UserController();

/* Insert user to the database */
router.post("/add", userController.addUser);

/* Read operation */
router.get("/:id", userController.getUser);

/* Update operation */
router.put("/update/:id", userController.updateUser);

/* Delete operattion */
router.delete("/delete/:id", userController.deleteUser);

router.get("/search/by", userController.searchUser);

export default router;
