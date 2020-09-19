const express = require('express');
const conectarDB = require('./config/db');

const app = express();

//Conectar DB
conectarDB();

//Habilitar  express json
app.use(express.json({ extended: true }));

//Puerto App
const PORT = process.env.PORT || 4000;

app.use('/api/usuarios', require('./routes/usuarios'));

app.listen(PORT, () => {
  console.log(`el server esta run en PORT: ${PORT}`);
});