const express = require("express");

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Bot activo 🚀");
});

app.post("/webhook", (req, res) => {
  console.log("📩 Señal recibida:", req.body);
  res.send("OK");
});

app.listen(PORT, () => {
  console.log("Servidor corriendo en puerto " + PORT);
});
