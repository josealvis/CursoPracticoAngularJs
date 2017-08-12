var fs = require('fs');
var index = fs.readFileSync('Client/index.html');
var express = require('express');

var routes =  require('./server/Services');

var app = express();

app.use('/', express.static(__dirname + '/client/'));
app.use('/',routes);


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});