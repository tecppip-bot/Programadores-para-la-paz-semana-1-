const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('servidor funcionando correctamente deisy molano');
});

app.listen(3000, () => {
  console.log('servidor ejecutandose en http://localhost:3000');
});