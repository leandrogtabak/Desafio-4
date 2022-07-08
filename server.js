const express = require('express');
const productos = require('./modules/productos');

const app = express();

const PORT = 8080;

const server = app.listen(PORT, () => {
  console.log(`Servidor http corriendo en el puerto ${server.address().port}`);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/productos', productos);

app.use(express.static('public'));

server.on('error', (error) => console.log(`Error en el servidor: ${error}`));
