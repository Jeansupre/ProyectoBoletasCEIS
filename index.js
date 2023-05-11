const express = require('express');
const inserts = require('./inserts');
const cors = require('cors')

const app = express();

app.use(cors());

app.use(express.static(__dirname));

app.get('/inserts.js', function(req, res) {
  res.set('Content-Type', 'text/javascript');
  res.sendFile(__dirname + '/inserts.js');
});

const port = 5500; // El puerto que quieras utilizar
app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});

