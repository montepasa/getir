const mongoose = require('mongoose');

const recordScheme = mongoose.Schema({
    startDate: String,
    key: String,
    value: String,
    counts : [Number]
}, 
{
    timestamps : true
});

module.exports = mongoose.model("Record", recordScheme);

