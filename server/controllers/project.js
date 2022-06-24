var Project = require('../models/project');
var Category = require('../models/category');
var _ = require('underscore');
var fs = require('fs');

// 向前台返回JSON方法的简单封装
var jsonWrite = function (res, ret) {
	res.json(ret);
/* 	if(typeof ret === 'undefined' || ret.success == false) {
		res.json({
			code:'1',
			msg: '操作失败',
			ret: ret
		});
	} else {
		res.json(ret);
	} */
};
Date.prototype.Format = function (fmt) {
	var o = {
	  'M+': this.getMonth() + 1,
	  'd+': this.getDate(),
	  'H+': this.getHours(),
	  'm+': this.getMinutes(),
	  's+': this.getSeconds(),
	  'S+': this.getMilliseconds()
	};
	//因为date.getFullYear()出来的结果是number类型的,所以为了让结果变成字符串型，下面有两种方法：
	if (/(y+)/.test(fmt)) {
	  //第一种：利用字符串连接符“+”给date.getFullYear()+''，加一个空字符串便可以将number类型转换成字符串。
	  fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
	}
	for (var k in o) {
	  if (new RegExp('(' + k + ')').test(fmt)) {
		//第二种：使用String()类型进行强制数据类型转换String(date.getFullYear())，这种更容易理解。
		fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (('00' + o[k]).substr(String(o[k]).length)));
	  }
	}
	return fmt;
};
/* var dateFormatter= function(value) { 
	var date = moment.parseZone(value).local().format('YYYY-MM-DD HH:mm:ss');
	return date;
} */
var dateFormatter= function(time){
    var localTime = (new Date(time)) - (new Date().getTimezoneOffset())*60*1000;
    localTime = new Date(localTime).Format('yyyy-MM-dd HH:mm:ss');
	return localTime;
  }

//admin post article
exports.save = function (req, res) {
	var projectObj = JSON.parse(req.query.article);
	var _article;
	var id = projectObj.id;
	projectObj.author = req.session.user._id;
	if (id) {
	Project.findById(id, function (err, article) {
		  if (err) {
		      return jsonWrite(res, {
		      	'success': false,
		      	'errMsg': err
		      });
		  }

		  _article = _.extend(article, projectObj);
		  _article.save(function (err, article) {
		    if (err) {
		      return jsonWrite(res, {
		      	'success': false,
		      	'errMsg': err
		      });
		    }	
		  });
		});
	} else {
		_article = new Project(projectObj);
		_article.save(function (err, article) {
		    if (err) {
		      return jsonWrite(res, {
		      	'success': false,
		      	'errMsg': err
		      });
		    }
		});
	}
};

//list
exports.list = function(req, res) {
	var pageIndex = req.query.pageIndex;
	var pageSize = req.query.pageSize;
    Project.findList(pageIndex, pageSize,null, {}, function(err, projects) {
		projects.forEach(function(item) {
			item.meta.createAt = dateFormatter(item.meta.createAt);
		});
	    if (err) {
	      return jsonWrite(res, {
	      	'success': false,
	      	'errMsg': err
	      });
	    } else {
		Project.getTotal({},function(err, list) {
				if (err) {
				  return jsonWrite(res, {
					  'success': false,
					  'errMsg': err
				  });
				}
				return jsonWrite(res, {
					'success': true,
					'result': projects,
					'total': list.length
				});
			});
		}
	});
};

exports.getList = function(req, cb) {
	var pageIndex = req.query.page? req.query.page: 1;
	var pageSize = req.query.pageSize? req.query.pageSize:10;
	var params={};
	if (req.query.type) {
		params["p_level"] = req.query.type;
	}
	if (req.query.filter) {
		params["filter"] = req.query.filter;
	}
    Project.findList(pageIndex, pageSize,null, params, function(err, projects) {
		for(var i=0; i < projects.length; i++) {
			projects[i]['createAt'] = dateFormatter(projects[i].meta.createAt);
		}
	    if (err) {
	      cb({
	      	'success': false,
	      	'errMsg': err
	      });
		  return;
	    } else {
		Project.getTotal(params,function(err, list) {
				if (err) {
				  cb({
					  'success': false,
					  'errMsg': err
				  });
				  return;
				}
				cb({
					'success': true,
					'result': projects,
					'total': list.length
				});
				return;
			});
		}
	});
};

//detail page
exports.getDetail = function(id, cb) {
    Project.findById(id, function (err, article) {
        if (err) {
        cb&&cb({
            'success': false,
            'errMsg': err
        });
        return;
        }
        cb&&cb({
            'success': true,
            'result': article
        });
        return;
    });
}

exports.detail = function(req, res) {
	var id = req.params.id;
    Project.findById(id, function (err, article) {
		if (err) {
            return jsonWrite(res, {
                'success': false,
                'errMsg': err
            });
        }
        return jsonWrite(res, {
            'success': true,
            'result': article
        });
    });
}


//list delete article
exports.delete = function(req, res) {
  var id = req.params.id;
  console.log(id)
  if (id ) {
    Project.remove({_id: id}, function (err, article) {
        if (err) {
            return jsonWrite(res, {
            'success': false,
            'errMsg': err
            });
        }
        return jsonWrite(res, {
            'success': true,
            'result': article
        });
    });
  }
};