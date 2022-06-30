var vertoken = require('./token')
var expressJwt = require('express-jwt');
module.exports= function (app) {
  app.use(function(req, res, next) {
    var token = req.headers['authorization'];
    if(token == undefined){
      return next();
    }else{
      vertoken.verToken(token).then((data)=> {
        req.data = data;
        return next();
      }).catch((error)=>{
        return next();
      })
    }
  });
  app.use(expressJwt({
    secret: 'mes_qdhd_mobile_xhykjyxgs',
    algorithms: ['HS256']
  }).unless({
    path: [
      '/user/signin',
      '/user/signup',
      '/articles',
      '/statistics'
    ]
  }));
  app.use(function(err, req, res, next) {
      if (err.status == 401) {
          return res.status(401).send('token失效');
      }
  })
}