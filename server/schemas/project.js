/**
 * Created by Administrator on 2017/3/8.
 */
 var mongoose = require('mongoose');
 var Schema = mongoose.Schema;
 var ObjectId = Schema.Types.ObjectId;
 
 var ProjectSchema= new mongoose.Schema({
     title:String,
     content: String,
     abstract: String,
     author: {type: ObjectId, ref: 'User'},
     category: {
         type: ObjectId,
         ref: 'Category'
     },
     meta:{
         createAt:{
             type:Date,
             defult:Date.now()
         },
         updateAt:{
             type:Date,
             default:Date.now()
         }
     }
 })
 
 ProjectSchema.pre('save',function (next) {    //每次存储数据都会调用该方法
     if (this.isNew){        //判断数据是否为新
         this.meta.createAt=this.meta.updateAt=Date.now();
     }
     else{
         this.meta.updateAt=Date.now();
     }
     next();     //存储流程走下去
 })
 
 ProjectSchema.statics={
     fetch:function (cb) {       //取出数据库所有数据
         return this
             .find({})
             .sort({'meta.updateAt': 'desc'})  //排序
             .exec(cb)
     },
     findById:function (id,cb) {     //查询单条数据
         return this
             .findOne({_id:id})
             .exec(cb)
     },
     findList: function(pageIndex, pageSize, sort, params, cb) { //去除所有要查询的数据
         sort = sort? sort: {'meta.createAt': 'desc'};
         params= params? params:{};
         if (params['filter']) {
             var reg = new RegExp(params['filter'], "i");
             params['$or'] =[
                 {title: {$regex: reg}},
                 {content: {$regex: reg}},
                 {abstract: {$regex: reg}},
             ]
             delete params['filter'];
         }
         return this
             .find(params, {content:0})
             .populate('author', 'name')
             .populate('category', 'name')
             .sort(sort)  //排序
             .skip(parseInt(pageSize)*(parseInt(pageIndex)-1))
             .limit(parseInt(pageSize))
             .exec(cb)
     },
     getTotal: function(params, cb) {
         params= params? params:{};
         if (params['filter']) {
             var reg = new RegExp(params['filter'], "i");
             params['$or'] =[
                 {title: {$regex: reg}},
                 {content: {$regex: reg}},
                 {abstract: {$regex: reg}},
             ]
             delete params['filter'];
         }
         return this
         .find(params, {content:0}).exec(cb)
     }
 }
 
 module.exports=ProjectSchema;     //导出