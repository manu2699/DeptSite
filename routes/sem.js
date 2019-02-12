var express = require('express');
var router = express.Router();
var fs = require('fs');
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));

var path1 = './public/uploads/';

function getDirs(pt) {
    var files = fs.readdirSync(pt), paths = [];
    for (var i = 0; i < files.length; i++) {
        var s = pt + '/' + files[i];
        s = s.replace(/\s/g, "%20");
        s = s.substr(1, s.length);
        paths.push(s);
    }
    return paths;
}

var bool = 0;

//rendering page with list of files
router.get('/', function (req, res) {
    res.render('sem', { data1: [], data2: [], bool: 0, msg : 'Welcome Buddy' });
});

router.get('/goback', (req, res) => {
    res.render('sem', { data1: [], data2: [],bool : 0,  msg : 'Wanna Choose again ! ' });
});

router.post('/select', (req, res) => {
    var a, b, pt ,c1, c2;
    c1 = req.body.sem;
    c2 = req.body.categ;
    pt = path1 + c1 + '/' + c2 ;
    if(c1 !== undefined && c2 !== undefined ){
        res.render('sem', {
            data1: getDirs(pt),
            data2: fs.readdirSync(pt),
            bool: 1,
            msg : 'Fetched Results { ' + '\n' + 'if (insufficient)' + '\n\t' + ' request.staff to upload(more) '+ ' \n }'
        });
    }
    else if( (c1 === undefined && c2 !== undefined) || (c1 !== undefined && c2 === undefined) || (c1 === undefined && c2 === undefined) )
        res.render('sem', { data1: [], data2: [],bool : 0,  msg : 'Wanna Choose again ! ' });
});

module.exports = router;