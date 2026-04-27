import sqlite3 from 'sqlite3';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// 1. Truco de ES Modules para obtener la ruta de la carpeta actual
const __dirname = dirname(fileURLToPath(import.meta.url));

// 2. Definimos dónde se guardará el archivo de la base de datos
const dbPath = join(__dirname, 'marketplace.sqlite');

// 3. Conectamos a SQLite (creará el archivo si no existe)
// Usamos .verbose() para que nos muestre errores detallados si algo falla
const db = new (sqlite3.verbose()).Database(dbPath, (err) => {
    if (err) {
        console.error('Error conectando a la base de datos:', err.message);
    } else {
        console.log('Conexión exitosa a SQLite');
    }
});

// 4. Exportamos la conexión para usarla en index.js
export default db;