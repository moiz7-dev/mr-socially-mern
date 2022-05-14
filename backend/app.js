const express = require('express');
const app = express();
const fileupload = require('express-fileupload');
require('dotenv').config({path: 'backend/config/config.env'})

app.use((req, res, next) => {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Pass to next layer of middleware
    next();
});

app.use(express.json());

app.use(fileupload());

//Routes
app.use('/api', require('./routes/post'));
app.use('/api', require('./routes/comment'));

module.exports = app;