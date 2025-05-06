const express = require("express");
const router = express.Router();
const db = require("../config/db");

router.get("/", (req, res) => {
  const query = "SELECT * FROM products";
  db.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching products:", err);
      return res.status(500).json({ error: "Database error" });
    }
    res.json(results);
  });
});

module.exports = router;
