var express = require('express');

var app = express(),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    cookieParser = require('cookie-parser'),
    morgan = require('morgan');
var session = require('express-session')

var userinfo = require('./wx/userinfo')

app.locals.basedir = './'

var port = 18080;
//中间件定义
app.use(morgan('combined'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 }}))


var check = require('./wx/check');
var oauth = require('./wx/oauth')
app.use('/wx/', check);
app.use('/wx/', oauth);

app.get('/index', function(req, res) {
    var openid = req.session.openid;

    if(openid) {
        userinfo(openid).then(function (userinfo) {
            res.send(userinfo);
        })
    } else {
        res.redirect('/wx/authorization?silent=true');
    }
})

//启动服务
app.listen(port, function () {
    console.log('服务启动成功！请访问 http://localhost:' + port);
});

