var mongoose = requre('moongose');
var records = require('../models/record.model');

records.statics = {

    create: function (data, cb) {
        var record = new this(data);
        record.save(cb);
    },

    get: function (query, cb) {
        this.find(query, cb);
    },

    update: function (query, updateData, cb) {
        this.findOneAndUpdate(query, { $set: updateData }, { new: true }, cb);
    },

    delete: function (query, cb) {
        this.findOneAndDelete(query, cb);
    },

    aggregate: function (data, cb) {
        records.aggregate([
            {
                $addFields: {
                    totalCount: { $sum: "$count" }
                }
            },
            {
                $match: {
                    totalCount: {
                        $gte: parseInt(data.minCount),
                        $lte: parseInt(data.maxCount)
                    },
                    createdAt: {
                        $gte: new Date(data.startDate),
                        $lte: new Date(data.endDate)
                    }
                }
            },
            {
                $project: {
                    _id: 0,
                    key: 0,
                    createdAt: 0,
                    totalCount: 0
                }
            }
        ]).exec((err, data) => {

            if (err) {
                return cb(err);
            }
            else{
               return cb(null, data);
            }
           
        });
    }

}

var recordModel = mongoose.model('record', records);
module.exports = recordModel;