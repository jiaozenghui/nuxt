
var User = require('../models/user');
var path = require('path');

var jsonWrite = function (res, ret) {
  if(typeof ret === 'undefined') {
    res.json({
      code:'1',
      msg: '操作失败'
    });
  } else {
    res.json(ret);
  }
};

//sign up 
exports.signup = function (req, res) {
  var _user = {
    name: req.body.username,
    password: req.body.password
  };

  User.find({name: _user.name}, function (err, users) {
    if (err) {
      console.log (err);
    }

    if (users.length >0) {
      return jsonWrite(res, {
        'success': false,
         code: 409,
        'result': err
      });
    } else {
      var user = new User(_user);
      user.save(function(err, user) {
        if (err) {
          return jsonWrite(res, {
            'success': false,
            'result': err
          });
        }else {
          return jsonWrite(res, {
            'success': true,
            'result': 'ok'
          });
        }
      });
    }
  })
}

//show sign up 
exports.showSignup = function (req, res) {
  res.sendfile('signup.html', {root: path.join(__dirname, '../app/views')});
}


//user list page
exports.list = function(req, res) {
  User.fetch(function(err, users) {
    if (err) {
      console.log(err);
    }
    res.render('userlist', {
      title: '用户列表页',
      users: users
    });
  });
};


//sign in 
exports.signin = function (req, res) {
  var _user = {
    name: req.body.username,
    password: req.body.password
  };
  var userName = _user.name;
  var password = _user.password;
  User.findOne({name: userName}, function (err, user) {
    if (err) {
      return jsonWrite(res, {
        'success': false,
        'result': err
      });
    }
    if (!user) {
      return jsonWrite(res, {
        'success': false,
        'result': err
      });
    }
    user.comparePassword(password, function (err, isMatch) {
      if (err) {
        return jsonWrite(res, {
          'success': false,
          'result': err
        });
      }
      if (isMatch) {
        req.session.user = user;
        return jsonWrite(res, {
          'success': true,
          user: user,
          'result': 'ok'
        });
      } else {
        return jsonWrite(res, {
          'success': false,
          'result': 'password not is matched'
        });
      }
    })
  });
}

//show sign in 
exports.showSignin = function (req, res) {
  res.sendfile('login.html', {root: path.join(__dirname, '../app/views')});
}

//sign out 
exports.signout = function (req, res) {
  delete req.session.user
  //delete app.locals.user
  return res.redirect('/login');

}

//mildware for user
exports.signinRequired = function(req, res, next) {
  var user = req.session.user;
  if (!user) {
    //return res.redirect('/login');
    return jsonWrite(res, {
      'success': false,
      'errCode': 401
    });
  }
  next();
};

//get user
exports.getUser = function(req, res) {
  var user = req.session.user;
  jsonWrite(res, {
    'success': true,
    'result': user
  });
};

exports.adminRequired = function(req, res, next) {
  var user = req.session.user;
  if (user.role <=10) {
    return res.redirect('/signin');
  }
  next();
};