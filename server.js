const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('colocamos esto deisy');
});

app.get('/respetado', (req, res) => {
  res.send('Hola como van');
});

app.get('/mensaje/:saludo', (req, res) => {
  const nombre = req.params.saludo;
  res.send('como vas ' + nombre);
});

app.post('/reporte', (req, res) => {
  const mensaje = req.body.mensaje;
  res.json({
    estado: 'colocamos el mensaje deisy',
    mensaje: mensaje
  });
});

app.listen(3000, () => {
  console.log('Servidor ejecutándose en puerto 3000');
});
