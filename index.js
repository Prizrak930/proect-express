const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Привіт, світ!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Сервер запущено на порту ${PORT}`);
});
