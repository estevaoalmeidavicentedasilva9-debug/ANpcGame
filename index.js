import express from "express";
import dotenv from "dotenv";
import fetch from "node-fetch"; // se estiver no Node 18+, pode usar fetch nativo

dotenv.config();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Servidor do NPC rodando!");
});

app.post("/chat", async (req, res) => {
  const { message } = req.body;
  if (!message) return res.status(400).json({ error: "mensagem ausente" });

  // Exemplo: responde sempre com uma frase fixa (por enquanto)
  return res.json({ reply: "Oi! Eu sou um NPC inteligente 🤖" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Rodando na porta", PORT));
