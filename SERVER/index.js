const express = require("express");
const cors = require("cors");
const Rutas_Producto = require('./src/routes/productos_routes');

const app = express();
const port = process.env.PORT || 3000;

// Configuración de CORS
app.use(cors({origin: '*'}));// en vez del asterìsco se pone el link del frontend o varios links es por seguridad

// Middleware para parsear JSON
app.use(express.json());

// Ruta de prueba
app.get('/', (req, res) => {
    res.json({ mensaje: 'Servidor iniciado' });
});

// Rutas de la API
app.use('/productos', Rutas_Producto);

// Iniciar el servidor
app.listen(port, () => {
    console.log('Servidor iniciado en el puerto localhost:${port}');
});