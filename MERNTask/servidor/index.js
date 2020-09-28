const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors')

const app = express();

//Conectar DB
conectarDB();

app.use(cors());

//Habilitar  express json
app.use(express.json({ extended: true }));

//Puerto App
const port = process.env.PORT || 4000;

app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/proyectos', require('./routes/proyectos'));
app.use('/api/tareas', require('./routes/tareas'));

app.listen(port,'0.0.0.0', () => {
  console.log(`el server esta run en PORT: ${port}`);
});