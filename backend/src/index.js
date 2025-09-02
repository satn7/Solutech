const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// Rotas
const solutionsRouter = require("./routes/solutions");
app.use("/api/solutions", solutionsRouter);

app.get("/", (req, res) => {
  res.send("🚀 API Solutech rodando com sucesso!");
});

app.listen(PORT, () => {
  console.log(`✅ Servidor backend rodando na porta ${PORT}`);
});