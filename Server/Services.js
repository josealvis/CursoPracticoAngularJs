var express = require('express');
var router = express.Router();
var fs = require('fs');




router.get('/service',function(req, res){
 fs.readFile('Server/Data/data.json', 'utf8', function (err, data) {
        if (err) throw err;
       res.send(JSON.parse(data));
      });

});



 

module.exports = router;