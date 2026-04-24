import express from 'express';
import cors from 'cors';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const products = JSON.parse(readFileSync(join(__dirname, 'data/data.json'), 'utf-8'));

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});