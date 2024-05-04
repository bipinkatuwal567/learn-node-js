import mysql from "mysql2";

export default mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "forest#123@cat",
    database: "test",
  });