const express = require('express');

const app = express();

const PORT = 2000;

app.get('/', (req, res) => {
  res.send(`app corriendo en puerto ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`app corriendo en puerto ${PORT}`);
});
