import db from './db.js';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// 1. Leemos el JSON (Igual que como lo hacías en index.js)
const __dirname = dirname(fileURLToPath(import.meta.url));
const productsJSON = JSON.parse(readFileSync(join(__dirname, './data.json'), 'utf-8'));

// db.serialize asegura que las consultas SQL se ejecuten en orden, una tras otra.
db.serialize(() => {
    // 2. Limpiar terreno (Idempotencia)
    db.run(`DROP TABLE IF EXISTS products`);

    // 3. Crear el Esquema de la tabla
    db.run(`CREATE TABLE products (
        id INTEGER PRIMARY KEY,
        nombre TEXT,
        descripcion TEXT,
        precio INTEGER,
        imagen TEXT,
        categoria TEXT
    )`);

    // 4. Preparar la consulta de inserción (los '?' son los huecos seguros a rellenar)
    const stmt = db.prepare(`INSERT INTO products (id, nombre, descripcion, precio, imagen, categoria) VALUES (?, ?, ?, ?, ?, ?)`);

    // 5. Recorrer el JSON e inyectar cada fila
    productsJSON.forEach((p) => {
        stmt.run(p.id, p.nombre, p.descripcion, p.precio, p.imagen, p.categoria);
    });

    // 6. Cerrar la consulta y la conexión
    stmt.finalize();
    console.log('Base de datos sembrada con éxito. 160 productos insertados.');
});

db.close();