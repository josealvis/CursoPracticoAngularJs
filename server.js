var  express =  require('express');
var router = require('./Server/Services');

var app = express();

app.use('/', express.static(__dirname+"/Client/"));
app.use('/', router);

app.listen(3000, function(){

console.log("listen in port 3000.");

});





