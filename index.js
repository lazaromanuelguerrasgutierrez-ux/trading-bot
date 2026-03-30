const express = require("express");

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Bot activo 🚀");
});

app.post("/webhook", (req, res) => {
  console.log("📩 Señal recibida:", req.body);
  res.send("OK");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log("Servidor corriendo en 0.0.0.0:" + PORT);
});
