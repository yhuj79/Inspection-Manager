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

app.get("/api/product/list", (req, res) => {
  const sql = "SELECT * FROM InspectionManagerSystem.product WHERE date = ?";
  const params = req.query.date;
  db.query(sql, params, (err, result) => {
    if (!err) {
      res.send(result);
    } else {
      res.send(err);
    }
  });
});

app.get("/api/product/scan", (req, res) => {
  const sql =
    "SELECT * FROM InspectionManagerSystem.product WHERE date = ? AND id= ?";
  const params = [req.query.date, req.query.id];
  db.query(sql, params, (err, result) => {
    if (!err) {
      res.send(result);
    } else {
      res.send(err);
    }
  });
});

app.get("/api/product/update", (req, res) => {
  const sql =
    "UPDATE InspectionManagerSystem.product SET import = ? WHERE date = ? AND id= ?";
  const params = [req.query.import, req.query.date, req.query.id];
  db.query(sql, params, (err, result) => {
    if (!err) {
      res.send(result);
    } else {
      res.send(err);
    }
  });
});