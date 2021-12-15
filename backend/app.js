const express = require('express');
const app = express();
const fileupload = require('express-fileupload');
require('dotenv').config({path: 'backend/config/config.env'})

app.use(express.json());

app.use(fileupload());

//Routes
app.use('/api', require('./routes/post'));

module.exports = app;