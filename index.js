const express = require('express');
const bodyParser = require('body-parser');

// express app oluşturma
const app = express();

// gelen requestlerin tipi : content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// content-type - application/json
app.use(bodyParser.json())

// Route tanımlama. Sayfa ilk çağrıldığında burayı çalıştırır.
app.get('/', (req, res) => {
    res.json({"message": "Welcome to Node.js Education"});
});

// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});