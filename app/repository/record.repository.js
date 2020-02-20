const mongoose = require('mongoose');
var records = require('../models/record.model');



  exports.find = (data, callback) =>
    {
        var res = records.find();
        console.log("resultlar",res);
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
        ]).then(function(result){
            console.log("datalar", result);
        });
    }