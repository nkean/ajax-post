const express = require('express');
const router = express.Router(); // This is a class or constructor (not a method)

// this will live in the database shortly VVV
const recordCollection = require('../modules/record-collection');

router.get('/', (req, res) => {
    res.send(recordCollection);
});

router.post('/add', (req, res) => {
    console.log(req.body); // data on client side post = req.body on server
    recordCollection.push(req.body);
    res.sendStatus(200);
});

module.exports = router;