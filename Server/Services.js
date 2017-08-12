var express = require('express');
var router = express.Router();
var fs = require('fs');




router.get('/service',function(req, res){
  sobrescribir();
 fs.readFile('Server/Data/data.json', 'utf8', function (err, data) {
        if (err) throw err;
        res.send(JSON.parse(data));
      });

});



 



function sobrescribir(){
  //abrir archivos js
var DataOrigin = './Data/data.json';
var Data = require(DataOrigin);
Data.push("ok");
fs.writeFile('Server/Data/data.json', JSON.stringify(Data), function (err) {
  if (err) return console.log(err);
 // console.log(JSON.stringify(file));
  //console.log('writing to ' + fileName);
});


}

module.exports = router;