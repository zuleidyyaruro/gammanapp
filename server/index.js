const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const bodyParser=require('body-parser');
const cors=require('cors');

// conectar base de datos
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/api_gamman', {
    useNewUrlParser: true
});

// crear servidor
const app = express();

// habilitar body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

// cors
app.use(cors())

// rutas
app.use('/', routes());

// puerto
app.listen(3001);