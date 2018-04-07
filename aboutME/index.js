var path = require('path');
var express = require('express');
var app = express();
var indexRouter = require('./routes/index');
var userRouter = require('./routes/user');
var about_meRouter = require('./routes/about_me');

app.set('views', path.join(__dirname, 'views'));// 设置存放模板文件的目录
app.set('view engine', 'ejs');// 设置模板引擎为 ejs

app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/about_me', about_meRouter);

app.listen(3000, function () {
    console.log('App is running on port 3000!');}
  );