var express = require('express');
var util    = require('util');
var app     = express();
var port    = process.env.PORT || 8080;
var router  = express.Router();

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

var index = require('./index').router;
var project = require('./project').router;

app.use('/project', project);
app.use('/', index);

app.listen(port, process.env.IP);
