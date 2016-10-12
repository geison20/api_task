var express = require('express');
var path = require('path');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var consign = require('consign');

require('dotenv').config();

var app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());


// autoload mvc
consign({
        cwd: "application",
        locale: 'pt-br',
        logger: console,
        verbose: true,
        extensions: ['.js', '.json'],
        loggingType: 'info'
    })
    .include("config")
    .then("helpers")
    .then("models")
    .then("controllers")
    .then("middlewares")
    .then("routes")
    .into(app);


module.exports = app;
