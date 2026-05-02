import express from 'express';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import db from './data/db.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const SECRET_KEY = "mi_clave_super_secreta_marketplace";

const app = express();
const PORT = 3002;

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

app.post('/api/register', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email y password son obligatorios' });
  }

  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  const sql = `INSERT INTO users (email, password) VALUES (?, ?)`;

  db.run(sql, [email, hashedPassword], function (err) {
    if (err) {
      if (err.message.includes('UNIQUE')) {
        return res.status(400).json({ error: 'El correo ya está registrado.' });
      }
      return res.status(500).json({ error: 'Error interno del servidor.' });
    }
    res.status(201).json({ message: 'Usuario registrado con éxito', userId: this.lastID });
  });
});

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  db.get(`SELECT * FROM users WHERE email = ?`, [email], async (err, user) => {
    if (err) return res.status(500).json({ error: 'Error en la base de datos' });
    if (!user) return res.status(401).json({ error: 'Credenciales inválidas' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ error: 'Credenciales inválidas' });

    const token = jwt.sign(
      { userId: user.id },
      SECRET_KEY,
      { expiresIn: '2h' }
    );

    res.json({ message: 'Login exitoso', token: token });
  });
});

app.listen(PORT, () => {
  console.log(`El servidor está corriendo en http://localhost:${PORT}`);
});