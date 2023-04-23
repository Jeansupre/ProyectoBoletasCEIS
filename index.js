const express = require('express');
const inserts = require('./inserts');

const app = express();
const port = 3000;

// definir rutas y configuración de express aquí
app.use(express.static(__dirname));

// ejemplo de cómo utilizar inserts.js en el servidor
app.post('/', (req, res) => {
  inserts.insertarDatos(req.body);
  res.send('Datos insertados correctamente');
});

app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});
