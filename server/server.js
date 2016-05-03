var express = require('express');

var app = express(),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    cookieParser = require('cookie-parser'),
    morgan = require('morgan');

app.locals.basedir = './'

var port = 18080;
//中间件定义
app.use(morgan('combined'))
app.use(bodyParser.urlencoded({ extended: false }));


var sign = require('./sign/sign');

app.use('/sign', sign);

//启动服务
app.listen(port, function () {
    console.log('服务启动成功！请访问 http://localhost:' + port);
});

