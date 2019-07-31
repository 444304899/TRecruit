const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        cb(null, new Date().valueOf() + '-' + Math.random().toString().substr(2, 8) + '.' + file.originalname.split('.').pop())
    }
});
const upload = multer({ storage: storage })
const app = express();
const host = 'http://localhost:8082/';
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const mydb = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'h51904',
    port: 3306
});
mydb.connect();
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8082');
    //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', '*');
    // 支持cookie  必须指定具体的域名 
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
});
app.get('/', (req, res) => {
    res.send('首页');
});
// 启用cookie
let secret = 'app.h5190304.com';
app.use(cookieParser(secret));
// 启用session
// app.use(session({
//     secret: secret,
//     resave: false,
//     saveUninitialized: true,
//     cookie: { maxAge: 7 * 24 * 3600000 }
// }))

app.post('/login', (req, res) => {
    let sql = 'SELECT * FROM admin WHERE name = ? LIMIT 1';
    mydb.query(sql, [req.body.name], (err, result) => {
        if (err) {
            console.log(err);
            res.json({ r: 'err' });
            return;
        }
        // 检查账号是否存在  []  {}  ==>  true
        if (result.length == 0) {
            res.json({ r: 'name-not-exist' });
            return;
        }
        //检查密码是否正确  用户输入的密码 不等于 数据库里面的密码
        if (req.body.passwd != result[0].passwd) {
            res.json({ r: 'passwd-err' });
            return;
        }
        // 记录coookie和session
        // req.session.aid = result[0].aid;
        // req.session.name = result[0].name;

        res.send({ r: 'ok' });
    });
});

//提供session信息的路由
// app.get('/check', (req, res) => {
//     console.log(req.session);
//     res.json({ aid: req.session.aid, name: req.session.name });
// });

// 添加岗位路由
app.post('/addjob', (req, res) => {
    let d = req.body;
    let sql = 'INSERT INTO joblist(jobname,address,type,groups,datas,duty,demand) VALUES(?,?,?,?,?,?,?)';
    let data = [d.jobname,d.address,d.type,d.groups,d.datas,d.duty,d.demand];
    mydb.query(sql, data, (err,  result)=>{
        if(err){
            console.log(err);
            res.json({r:'err'});
            return ;
        }
        console.log(result);
        res.json({r:'ok'});

    });
});
// 获取书籍列表
app.get('/joblist', (req, res) => {
    let sql = 'SELECT * FROM joblist WHERE 1';
    mydb.query(sql, (err,  result)=>{
        if(err){
            console.log(err);
            res.json({r:'err'});
            return ;
        }
        // 对数据进行处理
        res.json(result);
    });
});

app.post('/deljob', (req, res) => {
    let d = req.body;
    let sql = 'DELETE joblist(jobname,address,type,groups,datas,duty,demand) VALUES(?,?,?,?,?,?,?)';
    let data = [d.jobname,d.address,d.type,d.groups,d.datas,d.duty,d.demand];
    mydb.query(sql, data, (err,  result)=>{
        if(err){
            console.log(err);
            res.json({r:'err'});
            return ;
        }
        console.log(result);
        res.json({r:'ok'});

    });
});

app.listen(8081, () => {
    console.log(`Server started on 8081`);
});