const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Ruta para manejar el envío del formulario
app.post('/enviar-formulario', (req, res) => {
  // Procesa los datos del formulario
  const email = req.body.email;
  const message = req.body.message;

  // Aquí puedes realizar cualquier lógica de procesamiento, como enviar correos electrónicos, guardar en la base de datos, etc.

  // Envía una respuesta al cliente
  res.send('¡Formulario recibido con éxito!');
});

// Sirve el archivo HTML del formulario
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/formulario.html');
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});
