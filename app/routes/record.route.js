module.exports = (app) => {

   const recordController = require('../controller/record.controller.js');  
    
   app.post('/', recordController.search);
   
   // Yeni record oluştur
   app.post('/record', recordController.create);

    //var olan record'ları dön
   app.get('/record', recordController.findAll);

   // recordId'si verilen record bilgilerini dön
   app.get('/record/:recordId', recordController.findOne);

   // recordId'si verilen record'ı güncelle
   app.post('/record/:recordId', recordController.update);

   //recordId'si verilen record'ı sil
   app.delete('record/:recordId', recordController.delete);
}