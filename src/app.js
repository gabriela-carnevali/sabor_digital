const express = require('express');
const cors = require('cors');
const app = express();
const routes = require('./routes'); 
const path = require('path')

// Middlewares globais (DEVE vir ANTES das rotas)
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}))

// Registro de todas as rotas da API centralizadas
app.use('/', routes);

app.use(
    '/uploads',
    express.static(path.resolve(__dirname, "..", "public", "uploads" ))
)

module.exports = app;