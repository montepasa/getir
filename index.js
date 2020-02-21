const express = require('express');
const bodyParser = require('body-parser');
// express app oluşturma
const app = express();

// gelen requestlerin tipi : content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// content-type - application/json
app.use(bodyParser.json())


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const config = require('./database.config');
const mongoose = require('mongoose');
require('./app/routes/record.route')(app);

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(config.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

// Route tanımlama. Sayfa ilk çağrıldığında burayı çalıştırır.
app.get('/', (req, res) => {
    res.json({ "message": "Welcome to Getir App Services" });
});

// listen for requests
app.listen(process.env.PORT || 80, () => {
    console.log("Server is listening on port 80");
});

module.exports = app;
