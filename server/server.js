const express = require('express');
const app = express();
const PORT = 5000;

// this will live in the database shortly VVV
const recordCollection = require('./modules/record-collection');

app.use(express.static('server/public'));

// routes (get, post, put delete requests)

app.get('/records', (req, res) => {
    res.send(recordCollection);
});

app.listen(PORT, () => {
    console.log(`up and running on port: ${PORT}`);
});