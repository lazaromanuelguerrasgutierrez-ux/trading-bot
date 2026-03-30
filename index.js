const express = require("express");
const fetch = require("node-fetch");

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 8080;

// ============================
// WEBHOOK DE TRADINGVIEW
// ============================
app.post("/webhook", async (req, res) => {
  console.log("📩 Señal recibida:", req.body);

  const side = req.body.side;
  const qty = req.body.qty;

  // ENVÍO A TRADERSYNCER
  await fetch("https://api.tradersyncer.com/order", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer TU_API_KEY"
    },
    body: JSON.stringify({
      symbol: "MNQ",
      side: side,
      qty: qty,
      type: "market"
    })
  });

  res.send("OK");
});

app.get("/", (req, res) => {
  res.send("Bot activo 🚀");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log("Servidor corriendo en 0.0.0.0:" + PORT);
});
