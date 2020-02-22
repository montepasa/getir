const repository = require ('../repository/record.repository');
const checkparam = require('../validations/record.validation');
// Yeni record Oluştur
exports.search = (req, res, next) => {
    console.log("req.body", req.body);
   
    const { errors, isValid } = checkparam(req.body);

    if(isValid)
    {
        return res.status(400).send({
            "errors": errors,
            "code": 100,
            "msg": 'Please check to required items',
            "records": []
        });
    }
  repository.find(req.body, function(data){
    return res.status(200).send({
        code: 0,
        msg: 'Success',
        records: data
    });
  });
};