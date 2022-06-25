<template>
  <header>
    <nav id="topnav">
      <div class="logo_div">Jzh个人博客</div>
      <div class="topnav_div">
        <a href="/main">首页</a>
        <a href="/aboutme.html">关于我</a>
        <a href="life_diary.html">慢生活</a>
        <a href="qianduanjishu.html">前端技术</a>
        <a href="drawing.html">兴趣爱好</a>
        <a target="_self" ng-if="user" class="ng-cloak" v-if="token" href="/articles/edit">添加文章</a>
        <a target="_self" ng-if="user" class="ng-cloak" v-if="token" href="/signout">退出</a>
      </div>
      <div class="search_div pull-right">
        <search-input></search-input>
      </div>

    </nav>
  </header>
</template>
<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
import SearchInput from './SearchInput.vue'
export default Vue.extend({
  name: 'HeaderNav',
  components: {
    SearchInput
  },
  computed: {
    ...mapState([
      'token'
    ])
  },
})
</script>
<style lang="scss" scoped>
.logo_div {
  flex: 0 0 auto;
}
.topnav_div {
  height: 60px;
  flex: 1 1 auto;
  line-height: 60px;
  margin-left: 2%;
  a {
    color: $fontColor;
    padding: 0 20px;
    font-size: 16px;
  }
}
.search_div {
  flex: 0 0 auto;
}
</style>