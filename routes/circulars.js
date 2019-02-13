var express = require('express');
var router = express.Router();
const path1 = './public/uploads/circ';
const fs = require('fs');

var ann = ["CSI ACTIVITIES TO BE CONDUCTED WEEKLY | " , " | 15, 16, 17 Feb Decalred as Holidays | "];

function getDirs() {
    var files = fs.readdirSync(path1),
        paths = [];
    for (var i = 0; i < files.length; i++) {
        var s = path1 + '/' + files[i];
        s = s.replace(/\s/g, "%20");
        s = s.substr(1, s.length);
        //console.log(s);
        paths.push(s);
    }
    return paths;
}

//rendering page with list of files
router.get('/', function (req, res) {
    var a, b;
    a = getDirs();
    b = fs.readdirSync(path1);
    res.render('circulars', { data1: a, data2: b, bool : 0 , ann : ann});
});

router.get('/adminedit', (req, res) => {
    
});
module.exports = router;