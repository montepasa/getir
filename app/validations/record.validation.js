const validator = require('validator'),
helper = require('../helper/helper');

module.exports = function checkRecordParam(data) {
    let errors = {};

    if(!helper.isNotNull(data.minCount)){
        errors.minCount = 'minCount is required. /n';
    }
    else
    {
        if(!validator.isInt(data.minCount.toString())){
            errors.minCount = 'minCount must be integer /n';
        }
    }


    if(!helper.isNotNull(data.maxCount)){
        errors.maxCount = 'maxCount is required. /n';
    }
    else
    {
        if(!validator.isInt(data.maxCount.toString())){
            errors.maxCount = 'maxCount must be integer /n';
        }
    
    }
   

    if(!helper.isNotNull(data.startDate)){
        errors.startDate = 'startDate is required. /n';
    }
    else
    {
        if(!validator.isISO8601(data.startDate)){
            errors.startDate = 'StartDate is invalid format. Should be YYYY-MM-DD';
        }
    }

    
    if(!helper.isNotNull(data.endDate)){
        errors.endDate = 'endDate is required. /n';
    }
    else
    {
        if(!validator.isISO8601(data.endDate)){
            errors.endDate = 'endDate is invalid format. Should be YYYY-MM-DD';
        }
    }


    if (isNotNull(Date.startDate) && isNotNull(Date.endDate)) {
        if (!validator.isBefore(data.startDate, data.endDate)) {
            errors.minCount = 'endDate must be after than start date';
        }
    }

    return {
        errors,
        isvalid : !isNotNull(errors)
    }
}