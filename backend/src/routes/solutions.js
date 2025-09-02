const express = require("express");
const router = express.Router();
const pool = require("../db");

// Lista todas as soluções
router.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM solutions");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao buscar soluções" });
  }
});

// Adiciona uma solução
router.post("/", async (req, res) => {
  try {
    const { name, description } = req.body;
    const result = await pool.query(
      "INSERT INTO solutions (name, description) VALUES ($1, $2) RETURNING *",
      [name, description]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao adicionar solução" });
  }
});

module.exports = router;
