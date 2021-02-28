const express = require("express"), //IMPORTAÇÕES: EXPRESS, CORS, MYSQL
app = express(),
cors = require("cors"),
mysql = require("mysql");
bcrypt = require('bcrypt');
bodyParser = require('body-parser');
cookie = require('cookie-parser');
session = require('express-session');
jwt = require('jsonwebtoken')
var consign = require('consign');
const { response } = require("express");

app.use(cors({
    origin:'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT'],
    credentials: true
})); //Permite a leitura de fontes externas

app.use(cookie())

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.json()); //Lê dados em json

//Session
app.use(session({
    key: 'userId',
    secret: 'conscire',
    resave: false,
    saveUninitialized: false,
    cookie:{
        expires: 60 * 60 * 24,
    },
}))

consign()
.include('././app/routes')
.then('././app/config/database.js')
.then('././app/models')
.into(app);

module.exports = app;