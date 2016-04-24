var express = require('express');
var path = require('path');
var app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', function(req, res) {
	res.sendFile('index.html', {root: __dirname});

})
.listen(8000);
console.log('Port listening on 8000.');