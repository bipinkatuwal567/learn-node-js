import express from "express";
import mysql from "mysql2";

const app = express();
app.use(express.json());
let connection;

/* Insert user to the database */
app.post("/user/add", (req, res) => {
  const { username, location } = req.body;

  connection.query(
    `INSERT INTO user (username, location) VALUES (?, ?)`, [username, location] ,
    (err, results, fields) => {
      if (err) throw err;

      if (results.affectedRows === 1) {
        res
          .status(200)
          .json({ success: true, message: "User added to database" });
      } else {
        res
          .status(200)
          .json({ success: false, message: "Unable to add user to database" });
      }
    }
  );
});

/* Read operation */
app.get("/user/:id", (req, res) => {
  const { id } = req.params;
  if (id) {
    connection.query(
      `SELECT * FROM user WHERE id=?`, [id],
      (err, results, fields) => {
        if (err) throw err;
        res.status(200).json(...results);
      }
    );
  } else {
    res.status(200).json({ success: false, message: "User ID NOT provided" });
  }
});

/* Update operation */
app.put("/user/update/:id", (req, res) => {
  const { id } = req.params;

  if (id) {
    const { username, location } = req.body;

    connection.query(
      `UPDATE user SET username=?, location=? WHERE id=?`, [username, location, id] , 
      (err, results, fields) => {
        if (err) throw err;

        console.log(results);
        if (results.affectedRows === 1) {
          res.status(200).json({ success: true, message: "User updated" });
        } else {
          res
            .status(200)
            .json({ success: false, message: "Unable to update user" });
        }
      }
    );
  } else {
    res.status(200).json({ success: false, message: "User ID Not provided" });
  }
});

/* Delete operattion */
app.delete("/user/delete/:id", (req, res) => {
  const { id } = req.params;

  if (id) {
    connection.query(
      `DELETE FROM user WHERE id=?`, [id],
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

app.listen(8000, () => {
  console.log("Server has started");
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "forest#123@cat",
    database: "test",
  });
});
