const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

require('./database/mongodb');

const apiRoute = require('./src/routes');

const app = express();

app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', express.static(path.join(__dirname, '/asset')));
app.use('/upload', express.static(path.join(__dirname, '/upload')));

app.use('/api',apiRoute);

module.exports = app;
