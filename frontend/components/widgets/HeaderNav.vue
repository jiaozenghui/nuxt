<template>
  <header>
    <nav id="topnav" :class="{open: isSw}">
      <i class="menu_c" @click="isSw=!isSw">
        <span class="menu_icon"></span>
      </i>
      <div class="logo_div">Jzh个人博客</div>
      <div class="topnav_div" >
        <a href="/main">首页</a>
        <a href="/aboutme.html">关于我</a>
        <a href="life_diary.html">慢生活</a>
        <a href="qianduanjishu.html">前端技术</a>
        <a href="drawing.html">兴趣爱好</a>
        <nuxt-link v-if="token" :to="`/new_article`">添加文章</nuxt-link>
        <nuxt-link v-if="token" :to="`/new_article`">退出</nuxt-link>
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
  data() {
    return {
      isSw: false
    }
  },
  components: {
    SearchInput
  },
  computed: {
    ...mapState({
      token : (state:any)=>state.user.token
  })
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