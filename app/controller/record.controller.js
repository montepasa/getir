const record = require('../models/record.model.js');
const repo = require('../repository/record.repository');
const checkparam = require('../validations/record.validation');
// Yeni record Oluştur
exports.create = (req, res) => {
};
// Database'deki tüm record'ları getir
exports.findAll = (req, res) => {
};
// İstenen record bilgisini döndür
exports.findOne = (req, res) => {
};
// record'ı update et
exports.update = (req, res) => {
};
// record Sil
exports.delete = (req, res) => {
};
exports.search = (req, res, next) => {
    const { startDate, endDate, minCount, maxCount } = req.body;
    const { errors, isValid } = checkparam(req.body);

    if(!isValid)
    {
        return res.status(400).send({
            "errors": errors,
            "code": 100,
            "msg": 'Please check to required items',
            "records": []
        });
    }

    repo.search({startDate : startDate, endDate:endDate, minCount:minCount, maxCount:maxCount}, function(err, data){
        if(err)
        {
            return res.status(400).send({
                "errors": errors,
                "code": 101,
                "msg": 'An error has occurred',
                "records": []
            });
        }

        return res.status(200).send({
            code: 0,
            msg: 'Success',
            records: data
        })

    });
};