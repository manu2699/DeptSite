var express = require('express');
var router = express.Router();
const fs = require('fs');
var formidable = require('formidable');
var bodyParser = require('body-parser');
var path1 = './public/uploads/';
var { readdirSync } = require('fs')

router.use(bodyParser.urlencoded({ extended: true }));

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
    var files = fs.readdirSync(pt),
        paths = [];
    for (var i = 0; i < files.length; i++) {
        var s = pt + '/' + files[i];
        s = s.replace(/\s/g, "%20");
        s = s.substr(1, s.length);
        //console.log(s);
        paths.push(s);
    }
    return paths;
}
var c1 ="", c2 = "", c = "", pt;

router.get('/', (req, res) => {
    res.render('admin', {bool : 0, data1 : [], data2 : [], msg : "Welcome ADMIN", sub : []});
});

router.get('/goback', (req, res) => {
    res.render('admin', { bool : 1, msg : "Please choose types" , sub : []});
});

router.post('/select', (req, res) => {
    c1 = req.body.sem;
    c2 = req.body.categ;
    c3 = req.body.other;
    if(c1 === undefined && c2 === undefined && c3 === undefined)
        res.render('admin', { bool : 1, data1 : [], data2 : [], msg : "Please choose types" });
    else if(c1 !== undefined && c2 !== undefined && c3 !== undefined)
        res.render('admin', { bool : 1,  data1 : [], data2 : [], msg : "Either Semester and QuesP/Studymaterials or only Other Category Should be selected" });
    else if(c1 !== undefined && c2 === undefined && c3 === undefined)
        res.render('admin', { bool : 1, data1 : [], data2 : [], msg : "Select Category of Upload" });
    else if(c1 === undefined && c2 !== undefined && c3 === undefined)
        res.render('admin', { bool : 1, data1 : [], data2 : [], msg : "Please Select Semester " });
    else if(c1 !== undefined && c2 !== undefined && c3 === undefined){
        c = c1 + '/' + c2 + '/';
        pt = path1 + c.substring(0, c.length - 1);
        res.render('admin', { bool : 5, data1 : [] , data2 : [],  msg : "Now Select Subject to Upload Files", sub : getSubs(pt + "/") });
    }
    else if(c1 === undefined && c2 === undefined && c3 !== undefined){
        c = c3 + '/';
        pt = path1 + c.substring(0, c.length - 1);
        res.render('admin', { bool : 2, data1 : getDirs(pt), data2 : fs.readdirSync(pt), msg : "Now Upload Files", sub : [] });
    }
});

router.post('/getSub', (req, res) => {
    var t = req.body.sub;
    pt = pt + '/' + t;
    c = c + t + '/';
    console.log(pt, c);
    if(pt !== undefined){
        res.render('admin', {
            data1: getDirs(pt),
            data2: fs.readdirSync(pt),
            bool: 2,
            msg : 'Fetched Results { ' + '\n' + 'if (insufficient)' + '\n\t' + ' request.staff to upload(more) '+ ' \n }',
            sub : []
        });
    }
});

router.post('/upload', (req, res) => {
    var form = new formidable.IncomingForm();

    form.parse(req);

    form.on('fileBegin', function (name, file){
        file.path = './public/uploads/' + c + file.name;
    });

    form.on('file', function (name, file){
        console.log('Uploaded ' + file.name);
        res.render('admin', { bool: 2 , data1 : getDirs(pt), data2 : fs.readdirSync(pt), msg : "File Uploaded", sub : []});
    });
});

router.post('/log', (req, res) => {
    var uname = req.body.firstname;
    var pass = req.body.password;
    if (uname == "cse" && pass == "vit")
        res.render('admin', { bool: 1,  data1 : [], data2 : [], msg : "Successfully Logged in!  Now choose Types to Upload file", sub : []});
    else
        res.render('admin', { bool: 0, data1 : [], data2 : [],  msg : "Error in LOG-IN", sub : []});
});

router.post('/del' , (req, res) => {
    var s = req.body.delf;
    s = s.replace(/%20/g, " ");
    s = ".".concat(s);
    s = s.substring(0, s.lastIndexOf(' '))
    fs.unlinkSync(s);
    res.render('admin', { bool: 2 , data1 : getDirs(pt), data2 : fs.readdirSync(pt), msg : "File Deleted", sub : []});
});

module.exports = router;

// res.render('admin', { bool : 2, data1 : getDirs(pt), data2 : fs.readdirSync(pt), msg : "Now Upload Files" });