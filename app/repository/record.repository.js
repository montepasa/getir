var records = require('../models/record.model');

  exports.find = (data, callback) =>
    {
       
        records.aggregate([
            // add 'totalCount' field for sum of array value
            {
              $addFields: {
                totalCount: { $sum: "$counts" }
              }
            },
            // filter 'totalCount' and 'createdAt' fields
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
            // set response field
            {
              $project: {
                _id: 0,
                key: 0,
                createdAt: 0,
                totalCount: 0
              }
            }
          ]).exec((err, result) => {   
              console.log("birinci adim");
            //hata logla
            callback(result); 
          })
    }