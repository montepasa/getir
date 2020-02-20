module.exports = {
    isNotNull: function (val) {
        return val != '' &&
            val != {} &&
            val != undefined &&
            val != null;
    }, 
}