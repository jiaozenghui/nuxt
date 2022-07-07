<template>
  <div>
    <no-ssr>
      <ueditor :id="ue2" :config="config2" :defaultMsg="defaultMsg"></ueditor>
    </no-ssr>
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
        onEditorChange(e) { }
    },
    components: { Ueditor }
}
</script>
<style lang="scss" scoped>

</style>
