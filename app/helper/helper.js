module.exports = {
    isNotNull: function (val) {
        return val != '' &&
            val != {} &&
            val != undefined &&
            val != null &&
            (typeof val  != 'string' && val.trim().length === 0);
    }, 
}