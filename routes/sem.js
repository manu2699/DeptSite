var express = require('express');
var router = express.Router();
var fs = require('fs');
var bodyParser = require('body-parser');
var { readdirSync } = require('fs')

router.use(bodyParser.urlencoded({ extended: true }));

var path1 = './public/uploads/', pt = "";

function getSubs(pt){
    var source = pt;
    var Dirs = [], src = readdirSync(source);
    for(var i = 0; i < src.length; i++){
        var t = fs.statSync(source + src[i])
        if(t.isDirectory())
            Dirs.push(src[i])
    }
    //console.log(Dirs);
    return Dirs;
}

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
    res.render('sem', { data1: [], data2: [], bool: 0, msg : 'Welcome Buddy',sub : [] });
});

router.get('/goback', (req, res) => {
    res.render('sem', { data1: [], data2: [],bool : 0,  msg : 'Wanna Choose again ! ',sub : [] });
});

router.post('/select', (req, res) => {
    var a, b ,c1, c2;
    c1 = req.body.sem;
    c2 = req.body.categ;
    pt = path1 + c1 + '/' + c2 + '/' ;
    if(c1 !== undefined && c2 !== undefined ){
        res.render('sem', {
            data1: [],//getDirs(pt),
            data2: [],//fs.readdirSync(pt),
            bool: 5,
            msg : "Select Subject",
            sub : getSubs(pt)
        });
    }
    else if( (c1 === undefined && c2 !== undefined) || (c1 !== undefined && c2 === undefined) || (c1 === undefined && c2 === undefined) )
        res.render('sem', { data1: [], data2: [],bool : 0,  msg : 'Wanna Choose again ! ' , sub : []});
});

router.post('/getSub', (req, res) => {
    var t = req.body.sub;
    pt = pt + t;
    console.log(pt);
    if(pt !== undefined){
        res.render('sem', {
            data1: getDirs(pt),
            data2: fs.readdirSync(pt),
            bool: 1,
            msg : 'Fetched Results { ' + '\n' + 'if (insufficient)' + '\n\t' + ' request.staff to upload(more) '+ ' \n }',
            sub : []
        });
    }
});

module.exports = router;