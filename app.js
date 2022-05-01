const express = require('express')
const app = express()
var hbs = require('hbs');
require('dotenv').config();


const port = process.env.PORT;
app.set('view engine', 'hbs');


hbs.registerPartials(__dirname + '/views/partials');
//Servir contenido estatico

app.use(express.static('public'))

app.get('/', function (req, res) {
  res.render('home', {
    nombre: 'Marco Revolledo',
    titulo: 'Curso de node'
  });
});

app.get('/elements', function (req, res) {
  res.render('elements', {
    title_header:'Elements',
    nombre: 'Marco Revolledo',
    titulo: 'Curso de node'
  });
});

app.get('/generic', function (req, res) {
  res.render('generic', {
    title_header:'Generic',
    nombre: 'Marco Revolledo',
    titulo: 'Curso de node'
  });
})

app.get('*', function (req, res) {
  res.render('404', {
    title_header:'404 :: Page not found',
    nombre: 'Marco Revolledo',
    titulo: 'Curso de node'
  });
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})