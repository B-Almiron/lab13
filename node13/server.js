const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const itemController = require('./controllers/itemController');

const app = express();
const port = 3000;

// Configuración de middleware
app.use(cors());
app.use(bodyParser.json());

// Conexión a la base de datos de MongoDB
mongoose.connect('mongodb://0.0.0.0:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Conexión exitosa a MongoDB');
  })
  .catch((error) => {
    console.log('Error al conectar a MongoDB:', error);
  });

// Definir rutas para CRUD
app.get('/api/celulares', itemController.getItems);
app.get('/api/celulares/:id', itemController.getItemById);
app.post('/api/celulares', itemController.createItem);
app.put('/api/celulares/:id', itemController.updateItem);
app.delete('/api/celulares/:id', itemController.deleteItem);
// Iniciar el servidor
app.listen(port, () => {
  console.log('Servidor backend en funcionamiento en el puerto', port);
});
