<template>
  <div>
      <form class="form-horizontal">
        <div class="form-group-right clearfix">
          <label for="title">
            标题
          </label>
          <div class="form-group-right">
            <input required
              id="title"
              title="title"
              class="form-control verify-input"
              type="text"
              v-model="article.title"
              ng-maxlength="255"
              placeholder="请输入文章标题"/>
          </div>
        </div>
        <div class="form-group-right clearfix">
          <label for="title">
            分类
          </label>
          <div class="form-group-right">
            <label class="radio-inline" ng-repeat= "category in categories">
              <input type="radio" ng-value="category._id" ng-checked="article.category == category._id" name="category" v-model="article.category" />{{category.name}}
            </label>
          </div>
        </div>
        <div class="form-group-right clearfix">
          <label for="abstract">
            摘要
          </label>
          <div class="form-group-right">
            <textarea
              id="abstract"
              name="abstract"
              class="form-control"
              rows="4"
              ng-maxlength="255"
              type="abstract"
              v-model="article.abstract"
              placeholder="请输入文章摘要">
            </textarea>
          </div>
        </div>

        <div class="form-group-right clearfix">
          <label for="editor">
            文章内容
          </label>
          <div class="form-group-right">
            <div class="form-group-right">
              <no-ssr>
                <ueditor :id="ue2" :config="config2" :defaultMsg="defaultMsg"></ueditor>
              </no-ssr>
            </div>
          </div>
        </div>
        <div class="form-group">
          <div class="col-sm-offset-10 col-sm-10">
            <button class="btn btn-primary" ng-click="addArticle()" type="submit">{{btnTitle}}</button>
          </div>
        </div>
      </form>

  </div>
</template>

<script lang="ts">
import Ueditor from "~/components/widgets/Ueditor.vue"
export default {
    name: "NewArticle",
    middleware: ["auth"],
    head: {
        script: [
            { src: "/libs/ueditor/ueditor.config.js", type: "text/javascript", charset: "utf-8" },
            { src: "/libs/ueditor/ueditor.all.js", type: "text/javascript", charset: "utf-8" },
            { src: "/libs/ueditor/lang/zh-cn/zh-cn.js", type: "text/javascript", charset: "utf-8" }
        ]
    },
    data() {
        return {
          article: {},
          categories:[],
          defaultMsg: '',
          ue2: 'ue2',
          config2: {
              //初始化编辑器内容
              content : '',
              //是否聚焦 focus默认为false
              focus : true,
              //首行缩进距离,默认是2em
              indentValue:'2em',
              //初始化编辑器宽度,默认1000
              initialFrameWidth:'100%',
              //初始化编辑器高度,默认320
              initialFrameHeight:530,
              //编辑器初始化结束后,编辑区域是否是只读的，默认是false
              readonly : false ,
              //启用自动保存
              enableAutoSave: false,
              //自动保存间隔时间， 单位ms
              saveInterval: 500,
              //是否开启初始化时即全屏，默认关闭
              fullscreen : false,
              //图片操作的浮层开关，默认打开
              imagePopup:true,     
              //提交到后台的数据是否包含整个html字符串
              allHtmlEnabled:false,
              functions :['map','insertimage','insertvideo','attachment','insertcode','template', 'background', 'wordimage'] 

          }
        };
    },
    methods: {
        addArticle() {

        }
    },
    components: { Ueditor }
}
</script>
<style lang="scss" scoped>

</style>
