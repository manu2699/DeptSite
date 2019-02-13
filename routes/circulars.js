var express = require('express');
var router = express.Router();
const path1 = './public/uploads/circ';
const fs = require('fs');
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
var ann = [" | 15, 16, 17 Feb Decalred as Holidays | ", " | CSI ACTIVITIES TO BE CONDUCTED WEEKLY | "];

function getDirs() {
    var files = fs.readdirSync(path1),
        paths = [];
    for (var i = 0; i < files.length; i++) {
        var s = path1 + '/' + files[i];
        s = s.replace(/\s/g, "%20");
        s = s.substr(1, s.length);
        paths.push(s);
    }
    return paths;
}

//rendering page with list of files
router.get('/', function (req, res) {
    res.render('circulars', { data1: getDirs(), data2: fs.readdirSync(path1), bool : 0 , ann : ann});
});

router.get('/adminedit', (req, res) => {
    res.render('circulars', { data1: [], data2: [], bool : 1 , ann : ann});
});

router.post('/log', (req, res) => {
    var uname = req.body.firstname;
    var pass = req.body.password;
    if (uname == "cse" && pass == "vit") {
        bool = 1;
        res.render('circulars', { bool: 2, data1 : [], data2 : [], ann : ann });
    } else {
        bool = 0;
        res.render('circulars', { bool: 1, data1 : [], data2 : [], ann : "Error in LOG-IN"});
    }
});

router.post('/update', (req, res) => {
    ann.push(" | " + req.body.insert + " | ");
    //console.log(ann.length, ann.slice(1, ann.length));
    //ann = ann.slice(1, ann.length)
    res.render('circulars', { bool: 2, data1 : [], data2 : [], ann : ann });
});

router.get('/getback', (req, res) => {
    res.render('circulars', { data1: getDirs(), data2: fs.readdirSync(path1), bool : 0 , ann : ann});
});

module.exports = router;