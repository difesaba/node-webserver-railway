require('dotenv').config();
const express = require('express')
const hbs = require('hbs');
const app = express()
const port = process.env.PORT;

//handlebars
//TODO: require(hbs);
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});




// servir contenido estatico
//middleware
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home',{
        nombre: 'Diego Sanchez',
        titulo:'Curso Node'
    })
});

app.get('/generic', (req, res) => {
    res.render('generic',{
        nombre: 'Diego Sanchez',
        titulo:'Curso Node'
    })
})

app.get('/elements', (req, res) => {
    res.render('elements',{
        nombre: 'Diego Sanchez',
        titulo:'Curso Node'
    })
})


app.get('/hola-mundo', (req, res) => {
    res.send('Hello World desde su respectiva ruta')
})

app.get('*', (req, res) => {
    res.send('404 page not found')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})