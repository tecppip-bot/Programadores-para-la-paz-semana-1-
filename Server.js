const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Servidor activo creo que ya ');
});

app.get('/saludo', (req, res) => {
  res.send('Hola comunidad intente');
});

app.get('/mensaje/:nombre', (req, res) => {
  const nombre = req.params.nombre;
  res.send('mateo ' + nombre );
});

app.listen(3000, () => {
  console.log('Servidor ejecutándose en puerto 3000');
});

app.post('/reporte', (req, res) => {
  const mensaje = req.body.mensaje;
  res.json({
    estado: "Reporte recibido perfecto",
    mensaje: mensaje
  });
});
