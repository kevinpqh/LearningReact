const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hola mundo')
})

//Puerto App
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`el server esta run en PORT: ${PORT}`);
});