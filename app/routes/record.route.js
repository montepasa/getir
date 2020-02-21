module.exports = (app) => {
   const recordController = require('../controller/record.controller.js');
   app.post('/', recordController.search);
}