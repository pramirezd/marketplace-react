import express from 'express';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import db from './data/db.js';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.get('/api/products', (req, res) => {
  db.all('SELECT * FROM products', (err, rows) => {
    if (err) {
      console.error('Error al consultar productos:', err.message);
      res.status(500).json({ error: 'Falló la consulta de productos' });
    } else {
      res.json(rows);
    }
  })
});

app.listen(PORT, () => {
  console.log(`El servidor está corriendo en http://localhost:${PORT}`);
});