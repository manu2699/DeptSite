const dpath = require('path');
const fs = require('fs');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('index');
});

// circular downloads
router.get('/public/uploads/circ/:file(*)', (req, res) => {
  var file = req.params.file;
  var fileLocation = dpath.join('./public/uploads/circ', file);
  console.log(fileLocation);
  res.download(fileLocation, file);
});


// Quespapers Download
router.get('/public/uploads/sem2/quesp/:file(*)', (req, res) => {
  var file = req.params.file;
  var fileLocation = dpath.join('./public/uploads/sem2/quesp', file);
  console.log(fileLocation);
  res.download(fileLocation, file);
});
router.get('/public/uploads/sem3/quesp/:file(*)', (req, res) => {
  var file = req.params.file;
  var fileLocation = dpath.join('./public/uploads/sem3/quesp', file);
  console.log(fileLocation);
  res.download(fileLocation, file);
});
router.get('/public/uploads/sem4/quesp/:file(*)', (req, res) => {
  var file = req.params.file;
  var fileLocation = dpath.join('./public/uploads/sem4/quesp', file);
  console.log(fileLocation);
  res.download(fileLocation, file);
});
router.get('/public/uploads/sem5/quesp/:file(*)', (req, res) => {
  var file = req.params.file;
  var fileLocation = dpath.join('./public/uploads/sem5/quesp', file);
  console.log(fileLocation);
  res.download(fileLocation, file);
});
router.get('/public/uploads/sem6/quesp/:file(*)', (req, res) => {
  var file = req.params.file;
  var fileLocation = dpath.join('./public/uploads/sem6/quesp', file);
  console.log(fileLocation);
  res.download(fileLocation, file);
});
router.get('/public/uploads/sem7/quesp/:file(*)', (req, res) => {
  var file = req.params.file;
  var fileLocation = dpath.join('./public/uploads/sem7/quesp', file);
  console.log(fileLocation);
  res.download(fileLocation, file);
});
router.get('/public/uploads/sem8/quesp/:file(*)', (req, res) => {
  var file = req.params.file;
  var fileLocation = dpath.join('./public/uploads/sem8/quesp', file);
  console.log(fileLocation);
  res.download(fileLocation, file);
});


//All sem study Materials download
router.get('/public/uploads/sem2/studym/:file(*)', (req, res) => {
  var file = req.params.file;
  var fileLocation = dpath.join('./public/uploads/sem2/studym', file);
  console.log(fileLocation);
  res.download(fileLocation, file);
});
router.get('/public/uploads/sem3/studym/:file(*)', (req, res) => {
  var file = req.params.file;
  var fileLocation = dpath.join('./public/uploads/sem3/studym', file);
  console.log(fileLocation);
  res.download(fileLocation, file);
});
router.get('/public/uploads/sem4/studym/:file(*)', (req, res) => {
  var file = req.params.file;
  var fileLocation = dpath.join('./public/uploads/sem4/studym', file);
  console.log(fileLocation);
  res.download(fileLocation, file);
});
router.get('/public/uploads/sem5/studym/:file(*)', (req, res) => {
  var file = req.params.file;
  var fileLocation = dpath.join('./public/uploads/sem5/studym', file);
  console.log(fileLocation);
  res.download(fileLocation, file);
});
router.get('/public/uploads/sem6/studym/:file(*)', (req, res) => {
  var file = req.params.file;
  var fileLocation = dpath.join('./public/uploads/sem6/studym', file);
  console.log(fileLocation);
  res.download(fileLocation, file);
});
router.get('/public/uploads/sem7/studym/:file(*)', (req, res) => {
  var file = req.params.file;
  var fileLocation = dpath.join('./public/uploads/sem7/studym', file);
  console.log(fileLocation);
  res.download(fileLocation, file);
});
router.get('/public/uploads/sem8/studym/:file(*)', (req, res) => {
  var file = req.params.file;
  var fileLocation = dpath.join('./public/uploads/sem8/studym', file);
  console.log(fileLocation);
  res.download(fileLocation, file);
});

module.exports = router;