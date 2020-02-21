const mongoose = require('mongoose');

const recordScheme = new mongoose.Schema({
    key: String,
    value: String,
    createdAt: Date,
    counts: Array
});

module.exports = mongoose.model("records", recordScheme);

