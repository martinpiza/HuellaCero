import express from "express";
import fetch from "node-fetch"; // 👈 necesario para Node.js
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();
const PORT = 3000;

// Configurar rutas estáticas
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "public")));

// Ruta API para obtener noticias
app.get("/api/noticias", async (req, res) => {
  try {
    const url = `https://gnews.io/api/v4/search?q=medioambiente&lang=es&country=co&max=10&apikey=${process.env.API_KEY}`;
    console.log("🌎 Consultando:", url);

    const response = await fetch(url);
    const data = await response.json();

    res.json(data); // 👈 devolvemos el JSON al frontend
  } catch (error) {
    console.error("❌ Error:", error);
    res.status(500).json({ error: "Error al obtener noticias" });
  }
});


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});


app.get("/calculadora", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "calculadora.html"));
});


app.get("/noticias", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "noticias.html"));
});

app.get("/conocenos", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "conocenos.html"));
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
});
