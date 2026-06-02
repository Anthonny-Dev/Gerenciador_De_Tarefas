const express = require('express');
const mustacheExpress = require('mustache-express');
const conectarBanco = require('./model/db');
const PORTA = 3000
const app = express();

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/view');
app.use(express.urlencoded({extended: true}));

// chamamos a função para conectar ao banco(ava)
conectarBanco();

app.get('/', (req, res)=>{
    res.render('index.html');
});

app.listen(PORTA, ()=>{
    console.log(`Rodando API na porta ${PORTA}`);
});