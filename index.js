const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "127.0.0.1",
  password: "yhuj79macbook",
  database: "InspectionManagerSystem",
});

app.listen(3000, () => {
  console.log("Your server is running on port 3000");
});

app.get("/", (req, res) => {
  res.send("Your server is running on port 3000");
});

app.get("/api/product", (req, res) => {
  db.query("SELECT * FROM InspectionManagerSystem.product", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});