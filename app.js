const express = require("express");
const hbs = require("hbs");
const bodyParser = require("body-parser");
const cors = require("cors"); 
const port = process.env.PORT || 3000;

const app = express();

app.set('view engine','hbs');
hbs.registerPartials(__dirname + '/view',()=>{});

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

//Definir las Rutas - Para el cliente: login, categorias, index, not found
//GET o POST
app.get('/',(req, res)=>{
    res.render('index')
})
app.get('/login',(req, res)=>{
    res.render('signin-one')
})
app.get('/registro',(req, res)=>{
    res.render('registro-animales')
})
app.get('*',(req, res)=>{
    res.render('404')
})
//Advanced Tables
//sign in one
//404

//Definir puerto en el que se escucha solucitudes
app.listen(port,()=>{
    console.log('El servidor express esta corriendo en el puerto: ',port);
}) 
