var express = require('express');
var router = express.Router();
const fs = require('fs');
var formidable = require('formidable');
var bodyParser = require('body-parser');
var path1 = './public/uploads/';

router.use(bodyParser.urlencoded({ extended: true }));

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
var bool = 0, c1 ="", c2 = "", c = "", b = "", pt;

router.get('/', (req, res) => {
    res.render('admin', {bool : 0, data1 : [], data2 : [], msg : "Welcome ADMIN"});
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
        //console.log(43, c, path1, pt, a, b)
        res.render('admin', { bool : 2,data1 : getDirs(pt), data2 : fs.readdirSync(pt),  msg : "Now Upload Files" });
    }
    else if(c1 === undefined && c2 === undefined && c3 !== undefined){
        c = c3 + '/';
        pt = path1 + c.substring(0, c.length - 1);
        //console.log(52, c, path1, pt, a, b)
        res.render('admin', { bool : 2, data1 : getDirs(pt), data2 : fs.readdirSync(pt), msg : "Now Upload Files" });
    }
});

router.get('/goback', (req, res) => {
    res.render('admin', { bool : 1, msg : "Please choose types" });
});


router.post('/upload', (req, res) => {
    var form = new formidable.IncomingForm();

    form.parse(req);

    form.on('fileBegin', function (name, file){
        file.path = './public/uploads/' + c + file.name;
    });

    form.on('file', function (name, file){
        console.log('Uploaded ' + file.name);
        res.render('admin', { bool: 2 , data1 : getDirs(pt), data2 : fs.readdirSync(pt), msg : "File Uploaded"});
    });
});

router.post('/log', (req, res) => {
    var uname = req.body.firstname;
    var pass = req.body.password;
    if (uname == "cse" && pass == "vit") {
        bool = 1;
        res.render('admin', { bool: 1,  data1 : [], data2 : [], msg : "Successfully Logged in!  Now choose Types to Upload file"});
    } else {
        bool = 0;
        res.render('admin', { bool: 0, data1 : [], data2 : [],  msg : "Error in LOG-IN"});
    }
});

router.post('/del' , (req, res) => {
    var s = req.body.delf;
    s = s.replace(/%20/g, " ");
    //s = s.substring(s.indexOf('/',2), s.length);
    s = ".".concat(s);
    console.log(s.lastIndexOf(' '), s.length,s.substring(0, s.lastIndexOf(' ')));
    s = s.substring(0, s.lastIndexOf(' '))
    console.log("@ del 90 ", req.body.delf, s)
    fs.unlinkSync(s);
    res.render('admin', { bool: 2 , data1 : getDirs(pt), data2 : fs.readdirSync(pt), msg : "File Deleted"});
});

//fs.unlinkSync("./public/uploads/sem2/quesp/index.ejs");

module.exports = router;