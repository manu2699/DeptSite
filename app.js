var express = require('express');
var path = require('path');
var engine = require('ejs-locals');
var app = express();
var port = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

var routes = require('./routes/index');
app.use('/', routes);

var circulars = require('./routes/circulars');
app.use('/circulars', circulars);

var sem = require('./routes/sem');
app.use('/sem', sem);

var admin = require('./routes/admin');
app.use('/admin', admin);

var acal = require('./routes/acal');
app.use('/acal', acal);

var abtDept = require('./routes/abtDept');
app.use('/abtDept', abtDept);

app.listen(port);
module.exports = app;
