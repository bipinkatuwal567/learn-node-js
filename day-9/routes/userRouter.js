import express from "express";
import connection from "../models/index.js";
import Users from "../models/userModel.js";

const router = express.Router();

/* Insert user to the database */
router.post("/add", async (req, res) => {
  const { username, location } = req.body;

  try {
    const data = await Users.create({ username, location });
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
  }
});

/* Read operation */
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  if (id) {
    const data = await Users.findByPk(id);

    if (data) {
      res.json(data);
    } else {
      res.json([]);
    }
  } else {
    res.status(200).json({ success: false, message: "User ID NOT provided" });
  }
});

/* Update operation */
router.put("/update/:id", async (req, res) => {
  const { id } = req.params;

  if (id) {
    const { username, location } = req.body;

    const data = await Users.update(
      { username, location },
      {
        where: {
          id,
        },
      }
    );
    
    if(data[0] === 1){
      res.status(200).json({success: true, message: "User updated"})
    }else{
      res.status(200).json({success: false, message: "Unable to update the user"})
    }
    
  } else {
    res.status(200).json({ success: false, message: "User ID Not provided" });
  }
});

/* Delete operattion */
router.delete("/delete/:id", (req, res) => {
  const { id } = req.params;

  if (id) {
    connection.query(
      `DELETE FROM user WHERE id=?`,
      [id],
      (err, results, fields) => {
        if (err) throw err;

        if (results.affectedRows === 1) {
          res.status(200).json({ success: true, message: "User Deleted" });
        } else {
          res
            .status(200)
            .json({ success: false, message: "Unable to delete user" });
        }
      }
    );
  } else {
    res.status(200).json({ success: false, message: "User ID Not provided" });
  }
});

export default router;
