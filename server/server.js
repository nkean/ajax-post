const express = require('express');
const bodyParser = require('body-parser');
const recordRouter = require('./routes/record.route');
const app = express();
const PORT =  process.env.PORT || 5000;

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));

// routes (get, post, put delete requests), this code sets up the routes (think DOM event handler) (moved to record.route.js)
app.use('/record', recordRouter);

app.listen(PORT, () => {
    console.log(`up and running on port: ${PORT}`);
});