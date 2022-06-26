const express = require('express');
const app = express();
const rutas = require('./routes/index');
const path= require('path');
const {engine}=require('express-handlebars')

app.use(express.static('public'));
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.engine('hbs', engine({
    extname:'.hbs',
    defaultLayout: path.join(__dirname,'./views/layout/main'),
    layoutsDir: path.join(__dirname, './views/layout'),
    partialsDir: path.join(__dirname,'./views/partials')
}))

app.set('views', path.join(__dirname, './views'))
app.set('view engine', 'hbs')


app.use('/', rutas);

app.listen(8080, ()=>{
    console.log('servidor escuchando puerto 8080')
})