'use strict';

require('dotenv').config();
const express = require('express');
const app = new express();

const port = process.env.PORT || 4000;
const version = require('../package.json').version;

app.get('/', (req, res) => {
    res.send('Hola Mundo');
});

const server = app.listen(port, function() {
    console.log(`[API-PRODUCTS] HTTP-ADAPTER server started on port: ${port} - version: ${version}`);
});

module.exports = server;