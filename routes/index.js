const dpath = require('path');
const fs = require('fs');
var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.render('index');
});

// circular downloads
router.get('/public/uploads/circ/:file(*)', (req, res) => {
  var file = req.params.file;
  var fileLocation = dpath.join('./public/uploads/circ', file);
  res.download(fileLocation, file);
});

//sem 2
router.get('/public/uploads/sem2/quesp/CP/:file(*)', (req, res) => {
  var file = req.params.file;
  var fileLocation = dpath.join('./public/uploads/sem2/quesp/CP', file);
  res.download(fileLocation, file);
});

router.get('/public/uploads/sem2/studym/CP/:file(*)', (req, res) => {
  var file = req.params.file;
  var fileLocation = dpath.join('./public/uploads/sem2/studym/CP', file);
  res.download(fileLocation, file);
});

router.get('/public/uploads/sem2/studym/LABs/:file(*)', (req, res) => {
  var file = req.params.file;
  var fileLocation = dpath.join('./public/uploads/sem2/studym/LABs', file);
  res.download(fileLocation, file);
});

// sem 3 dlinks
router.get('/public/uploads/sem3/quesp/OOPS/:file(*)', (req, res) => {
  var file = req.params.file;
  var fileLocation = dpath.join('./public/uploads/sem3/quesp/OOPS', file);
  res.download(fileLocation, file);
});

router.get('/public/uploads/sem3/quesp/CE/:file(*)', (req, res) => {
  var file = req.params.file;
  var fileLocation = dpath.join('./public/uploads/sem3/quesp/CE', file);
  res.download(fileLocation, file);
});

router.get('/public/uploads/sem3/quesp/DM/:file(*)', (req, res) => {
  var file = req.params.file;
  var fileLocation = dpath.join('./public/uploads/sem3/quesp/DM', file);
  res.download(fileLocation, file);
});

router.get('/public/uploads/sem3/quesp/DPSD/:file(*)', (req, res) => {
  var file = req.params.file;
  var fileLocation = dpath.join('./public/uploads/sem3/quesp/DPSD', file);
  res.download(fileLocation, file);
});

router.get('/public/uploads/sem3/quesp/DS/:file(*)', (req, res) => {
  var file = req.params.file;
  var fileLocation = dpath.join('./public/uploads/sem3/quesp/DS', file);
  res.download(fileLocation, file);
});

router.get('/public/uploads/sem3/studym/OOPS/:file(*)', (req, res) => {
  var file = req.params.file;
  var fileLocation = dpath.join('./public/uploads/sem3/studym/OOPS', file);
  res.download(fileLocation, file);
});

router.get('/public/uploads/sem3/studym/CE/:file(*)', (req, res) => {
  var file = req.params.file;
  var fileLocation = dpath.join('./public/uploads/sem3/studym/CE', file);
  res.download(fileLocation, file);
});

router.get('/public/uploads/sem3/studym/DM/:file(*)', (req, res) => {
  var file = req.params.file;
  var fileLocation = dpath.join('./public/uploads/sem3/studym/DM', file);
  res.download(fileLocation, file);
});

router.get('/public/uploads/sem3/studym/DPSD/:file(*)', (req, res) => {
  var file = req.params.file;
  var fileLocation = dpath.join('./public/uploads/sem3/studym/DPSD', file);
  res.download(fileLocation, file);
});

router.get('/public/uploads/sem3/studym/DS/:file(*)', (req, res) => {
  var file = req.params.file;
  var fileLocation = dpath.join('./public/uploads/sem3/studym/DS', file);
  res.download(fileLocation, file);
});

router.get('/public/uploads/sem3/studym/LABs/:file(*)', (req, res) => {
  var file = req.params.file;
  var fileLocation = dpath.join('./public/uploads/sem3/studym/LABs', file);
  res.download(fileLocation, file);
});

// sem 4 studym sub wise
router.get('/public/uploads/sem4/studym/CA/:file(*)', (req, res) => {
  var file = req.params.file;
  var fileLocation = dpath.join('./public/uploads/sem4/studym/CA', file);
  res.download(fileLocation, file);
});

router.get('/public/uploads/sem4/studym/DAA/:file(*)', (req, res) => {
  var file = req.params.file;
  var fileLocation = dpath.join('./public/uploads/sem4/studym/DAA', file);
  res.download(fileLocation, file);
});

router.get('/public/uploads/sem4/studym/DBMS/:file(*)', (req, res) => {
  var file = req.params.file;
  var fileLocation = dpath.join('./public/uploads/sem4/studym/DBMS', file);
  res.download(fileLocation, file);
});

router.get('/public/uploads/sem4/studym/OS/:file(*)', (req, res) => {
  var file = req.params.file;
  var fileLocation = dpath.join('./public/uploads/sem4/studym/OS', file);
  res.download(fileLocation, file);
});

router.get('/public/uploads/sem4/studym/PQT/:file(*)', (req, res) => {
  var file = req.params.file;
  var fileLocation = dpath.join('./public/uploads/sem4/studym/PQT', file);
  res.download(fileLocation, file);
});

router.get('/public/uploads/sem4/studym/SE/:file(*)', (req, res) => {
  var file = req.params.file;
  var fileLocation = dpath.join('./public/uploads/sem4/studym/SE', file);
  res.download(fileLocation, file);
});

router.get('/public/uploads/sem4/studym/LABs/:file(*)', (req, res) => {
  var file = req.params.file;
  var fileLocation = dpath.join('./public/uploads/sem4/studym/LABs', file);
  res.download(fileLocation, file);
});

//sem 4 qp wise
router.get('/public/uploads/sem4/quesp/CA/:file(*)', (req, res) => {
  var file = req.params.file;
  var fileLocation = dpath.join('./public/uploads/sem4/quesp/CA', file);
  res.download(fileLocation, file);
});

router.get('/public/uploads/sem4/quesp/DAA/:file(*)', (req, res) => {
  var file = req.params.file;
  var fileLocation = dpath.join('./public/uploads/sem4/quesp/DAA', file);
  res.download(fileLocation, file);
});

router.get('/public/uploads/sem4/quesp/DBMS/:file(*)', (req, res) => {
  var file = req.params.file;
  var fileLocation = dpath.join('./public/uploads/sem4/quesp/DBMS', file);
  res.download(fileLocation, file);
});

router.get('/public/uploads/sem4/quesp/OS/:file(*)', (req, res) => {
  var file = req.params.file;
  var fileLocation = dpath.join('./public/uploads/sem4/quesp/OS', file);
  res.download(fileLocation, file);
});

router.get('/public/uploads/sem4/quesp/PQT/:file(*)', (req, res) => {
  var file = req.params.file;
  var fileLocation = dpath.join('./public/uploads/sem4/quesp/PQT', file);
  res.download(fileLocation, file);
});

router.get('/public/uploads/sem4/quesp/SE/:file(*)', (req, res) => {
  var file = req.params.file;
  var fileLocation = dpath.join('./public/uploads/sem4/quesp/SE', file);
  res.download(fileLocation, file);
});

//sem 5
router.get('/public/uploads/sem5/studym/ANT/:file(*)', (req, res) => {
  var file = req.params.file;
  var fileLocation = dpath.join('./public/uploads/sem5/studym/ANT', file);
  res.download(fileLocation, file);
});

router.get('/public/uploads/sem5/studym/CN/:file(*)', (req, res) => {
  var file = req.params.file;
  var fileLocation = dpath.join('./public/uploads/sem5/studym/CN', file);
  res.download(fileLocation, file);
});

router.get('/public/uploads/sem5/studym/E1/:file(*)', (req, res) => {
  var file = req.params.file;
  var fileLocation = dpath.join('./public/uploads/sem5/studym/E1', file);
  res.download(fileLocation, file);
});

router.get('/public/uploads/sem5/studym/MM/:file(*)', (req, res) => {
  var file = req.params.file;
  var fileLocation = dpath.join('./public/uploads/sem5/studym/MM', file);
  res.download(fileLocation, file);
});

router.get('/public/uploads/sem5/studym/TOC/:file(*)', (req, res) => {
  var file = req.params.file;
  var fileLocation = dpath.join('./public/uploads/sem5/studym/TOC', file);
  res.download(fileLocation, file);
});

router.get('/public/uploads/sem5/studym/LABs/:file(*)', (req, res) => {
  var file = req.params.file;
  var fileLocation = dpath.join('./public/uploads/sem5/studym/LABs', file);
  res.download(fileLocation, file);
});

router.get('/public/uploads/sem5/quesp/ANT/:file(*)', (req, res) => {
  var file = req.params.file;
  var fileLocation = dpath.join('./public/uploads/sem5/quesp/ANT', file);
  res.download(fileLocation, file);
});

router.get('/public/uploads/sem5/quesp/CN/:file(*)', (req, res) => {
  var file = req.params.file;
  var fileLocation = dpath.join('./public/uploads/sem5/quesp/CN', file);
  res.download(fileLocation, file);
});

router.get('/public/uploads/sem5/quesp/E1/:file(*)', (req, res) => {
  var file = req.params.file;
  var fileLocation = dpath.join('./public/uploads/sem5/quesp/E1', file);
  res.download(fileLocation, file);
});

router.get('/public/uploads/sem5/quesp/MM/:file(*)', (req, res) => {
  var file = req.params.file;
  var fileLocation = dpath.join('./public/uploads/sem5/quesp/MM', file);
  res.download(fileLocation, file);
});

router.get('/public/uploads/sem5/quesp/TOC/:file(*)', (req, res) => {
  var file = req.params.file;
  var fileLocation = dpath.join('./public/uploads/sem5/quesp/TOC', file);
  res.download(fileLocation, file);
});

//sem 6
router.get('/public/uploads/sem6/quesp/AI/:file(*)', (req, res) => {
  var file = req.params.file;
  var fileLocation = dpath.join('./public/uploads/sem6/quesp/AI', file);
  res.download(fileLocation, file);
});

router.get('/public/uploads/sem6/quesp/CD/:file(*)', (req, res) => {
  var file = req.params.file;
  var fileLocation = dpath.join('./public/uploads/sem6/quesp/CD', file);
  res.download(fileLocation, file);
});

router.get('/public/uploads/sem6/quesp/DS/:file(*)', (req, res) => {
  var file = req.params.file;
  var fileLocation = dpath.join('./public/uploads/sem6/quesp/DS', file);
  res.download(fileLocation, file);
});

router.get('/public/uploads/sem6/quesp/DSP/:file(*)', (req, res) => {
  var file = req.params.file;
  var fileLocation = dpath.join('./public/uploads/sem6/quesp/DSP', file);
  res.download(fileLocation, file);
});

router.get('/public/uploads/sem6/quesp/E1/:file(*)', (req, res) => {
  var file = req.params.file;
  var fileLocation = dpath.join('./public/uploads/sem6/quesp/E1', file);
  res.download(fileLocation, file);
});

router.get('/public/uploads/sem6/quesp/MC/:file(*)', (req, res) => {
  var file = req.params.file;
  var fileLocation = dpath.join('./public/uploads/sem6/quesp/MC', file);
  res.download(fileLocation, file);
});

router.get('/public/uploads/sem6/studym/AI/:file(*)', (req, res) => {
  var file = req.params.file;
  var fileLocation = dpath.join('./public/uploads/sem6/studym/AI', file);
  res.download(fileLocation, file);
});

router.get('/public/uploads/sem6/studym/CD/:file(*)', (req, res) => {
  var file = req.params.file;
  var fileLocation = dpath.join('./public/uploads/sem6/studym/CD', file);
  res.download(fileLocation, file);
});

router.get('/public/uploads/sem6/studym/DS/:file(*)', (req, res) => {
  var file = req.params.file;
  var fileLocation = dpath.join('./public/uploads/sem6/studym/DS', file);
  res.download(fileLocation, file);
});

router.get('/public/uploads/sem6/studym/DSP/:file(*)', (req, res) => {
  var file = req.params.file;
  var fileLocation = dpath.join('./public/uploads/sem6/studym/DSP', file);
  res.download(fileLocation, file);
});

router.get('/public/uploads/sem6/studym/E1/:file(*)', (req, res) => {
  var file = req.params.file;
  var fileLocation = dpath.join('./public/uploads/sem6/studym/E1', file);
  res.download(fileLocation, file);
});

router.get('/public/uploads/sem6/studym/MC/:file(*)', (req, res) => {
  var file = req.params.file;
  var fileLocation = dpath.join('./public/uploads/sem6/studym/MC', file);
  res.download(fileLocation, file);
});

router.get('/public/uploads/sem6/studym/LABs/:file(*)', (req, res) => {
  var file = req.params.file;
  var fileLocation = dpath.join('./public/uploads/sem6/studym/LABs', file);
  res.download(fileLocation, file);
});

//SEM 7
router.get('/public/uploads/sem7/studym/CNS/:file(*)', (req, res) => {
  var file = req.params.file;
  var fileLocation = dpath.join('./public/uploads/sem7/studym/CNS', file);
  res.download(fileLocation, file);
});

router.get('/public/uploads/sem7/studym/E2/:file(*)', (req, res) => {
  var file = req.params.file;
  var fileLocation = dpath.join('./public/uploads/sem7/studym/E2', file);
  res.download(fileLocation, file);
});

router.get('/public/uploads/sem7/studym/E3/:file(*)', (req, res) => {
  var file = req.params.file;
  var fileLocation = dpath.join('./public/uploads/sem7/studym/E3', file);
  res.download(fileLocation, file);
});

router.get('/public/uploads/sem7/studym/GCC/:file(*)', (req, res) => {
  var file = req.params.file;
  var fileLocation = dpath.join('./public/uploads/sem7/studym/GCC', file);
  res.download(fileLocation, file);
});

router.get('/public/uploads/sem7/studym/GTA/:file(*)', (req, res) => {
  var file = req.params.file;
  var fileLocation = dpath.join('./public/uploads/sem7/studym/GTA', file);
  res.download(fileLocation, file);
});

router.get('/public/uploads/sem7/studym/RMT/:file(*)', (req, res) => {
  var file = req.params.file;
  var fileLocation = dpath.join('./public/uploads/sem7/studym/RMT', file);
  res.download(fileLocation, file);
});

router.get('/public/uploads/sem7/studym/LABs/:file(*)', (req, res) => {
  var file = req.params.file;
  var fileLocation = dpath.join('./public/uploads/sem7/studym/LABs', file);
  res.download(fileLocation, file);
});

router.get('/public/uploads/sem7/quesp/CNS/:file(*)', (req, res) => {
  var file = req.params.file;
  var fileLocation = dpath.join('./public/uploads/sem7/quesp/CNS', file);
  res.download(fileLocation, file);
});

router.get('/public/uploads/sem7/quesp/E2/:file(*)', (req, res) => {
  var file = req.params.file;
  var fileLocation = dpath.join('./public/uploads/sem7/quesp/E2', file);
  res.download(fileLocation, file);
});

router.get('/public/uploads/sem7/quesp/E3/:file(*)', (req, res) => {
  var file = req.params.file;
  var fileLocation = dpath.join('./public/uploads/sem7/quesp/E3', file);
  res.download(fileLocation, file);
});

router.get('/public/uploads/sem7/quesp/GCC/:file(*)', (req, res) => {
  var file = req.params.file;
  var fileLocation = dpath.join('./public/uploads/sem7/quesp/GCC', file);
  res.download(fileLocation, file);
});

router.get('/public/uploads/sem7/quesp/GTA/:file(*)', (req, res) => {
  var file = req.params.file;
  var fileLocation = dpath.join('./public/uploads/sem7/quesp/GTA', file);
  res.download(fileLocation, file);
});

router.get('/public/uploads/sem7/quesp/RMT/:file(*)', (req, res) => {
  var file = req.params.file;
  var fileLocation = dpath.join('./public/uploads/sem7/quesp/RMT', file);
  res.download(fileLocation, file);
});

//SEM 8
router.get('/public/uploads/sem8/studym/MCAP/:file(*)', (req, res) => {
  var file = req.params.file;
  var fileLocation = dpath.join('./public/uploads/sem8/studym/MCAP', file);
  res.download(fileLocation, file);
});

router.get('/public/uploads/sem8/studym/E4/:file(*)', (req, res) => {
  var file = req.params.file;
  var fileLocation = dpath.join('./public/uploads/sem8/studym/E4', file);
  res.download(fileLocation, file);
});

router.get('/public/uploads/sem8/studym/E5/:file(*)', (req, res) => {
  var file = req.params.file;
  var fileLocation = dpath.join('./public/uploads/sem8/studym/E5', file);
  res.download(fileLocation, file);
});

router.get('/public/uploads/sem8/studym/LABs/:file(*)', (req, res) => {
  var file = req.params.file;
  var fileLocation = dpath.join('./public/uploads/sem8/studym/LABs', file);
  res.download(fileLocation, file);
});

router.get('/public/uploads/sem8/quesp/MCAP/:file(*)', (req, res) => {
  var file = req.params.file;
  var fileLocation = dpath.join('./public/uploads/sem8/quesp/MCAP', file);
  res.download(fileLocation, file);
});

router.get('/public/uploads/sem8/quesp/E4/:file(*)', (req, res) => {
  var file = req.params.file;
  var fileLocation = dpath.join('./public/uploads/sem8/quesp/E4', file);
  res.download(fileLocation, file);
});

router.get('/public/uploads/sem8/quesp/E5/:file(*)', (req, res) => {
  var file = req.params.file;
  var fileLocation = dpath.join('./public/uploads/sem8/quesp/E5', file);
  res.download(fileLocation, file);
});

module.exports = router;