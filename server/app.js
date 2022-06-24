var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var mongoStore = require('connect-mongo')(session);
var bodyParser = require('body-parser');
var fs = require('fs');
var mongoose = require('mongoose');
var app = express();

var date = require('./utils/date');
// connect to mongodb
var dbName = 'test';
var dbUrl = 'mongodb://user:blogpassw0rd@47.96.96.118:27018/' + dbName;
var mongoOptions = {
    keepAlive: 1,
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}
mongoose.connect(dbUrl, mongoOptions);
mongoose.connection.on('error', function (err) {
    console.log('Mongo Error:' + err);
}).on('open', function () {
    console.log('Connection opened');
});


app.use(session({
  secret: 'imooc',
  resave: true,
  saveUninitialized: true,
  store: new mongoStore({
    url: dbUrl,
    collection: 'sessions'
  })
}));

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

require('./config/routes')(app)

//require('./config/routes')(app)

var logPath = 'logs/'
var logFile = null;
var logTime = null;
/* console.log = function () {
    var time = date.format(new Date(), 'yyyy-MM-dd_HH:mm:ss');
    var foldName = time.substr(0, 10);
    if (logTime != foldName) {
        logTime = foldName;
        var fname = logPath + foldName + '.log';
        if (logFile) {
            logFile.end();
        }
        if (!fs.existsSync(fname)) {
            fs.writeFileSync(fname);
        }
        logFile = fs.createWriteStream(fname, {
            flags: 'a',
            encoding: 'utf8'
        })
    }
    logFile.write('【' + time + '】' + arguments[0] + '\r\n')
} */


module.exports = app;
