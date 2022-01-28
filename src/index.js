var express = require('express');
var morgan = require('morgan');
var app = express();

var puerto = 9000;

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.listen(puerto, function () {
  console.log('app listening on port '+puerto+'!');
});

// Endpoints ----------------------------------------

app.get('/', function (req, res) {
  res.json({ mensaje: "hola mundo, se parte de nuestro equipo @ProyectaUSAC" });
});

app.get('/saludo', function (req, res) {
  res.send('mensaje: '+ "Bienvenidos a PROYECTA USAC!");
});
