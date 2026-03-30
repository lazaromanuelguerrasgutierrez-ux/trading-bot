const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Servidor activo");
});

app.post("/webhook", (req, res) => {
  console.log("Alerta recibida:", JSON.stringify(req.body, null, 2));

  // Aquí luego conectas tu lógica de órdenes
  // Por ahora solo confirma recepción
  res.status(200).json({
    success: true,
    message: "Webhook recibido correctamente"
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Servidor escuchando en 0.0.0.0:${PORT}`);
});
