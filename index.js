import express from "express";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Bot activo");
});

app.post("/webhook", (req, res) => {
  console.log("Señal recibida:", req.body);
  res.send("OK");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Servidor corriendo");
});
