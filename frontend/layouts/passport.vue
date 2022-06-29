<template>
  <div>
    <div class="snow-container">
        <div class="snow foreground"></div>
        <div class="snow foreground layered"></div>
        <div class="snow middleground"></div>
        <div class="snow middleground layered"></div>
        <div class="snow background"></div>
        <div class="snow background layered"></div>
    </div>

    <div class="top-buttons-agileinfo">
        <nuxt-link :class="{'active': IsLoginActive}" :to="`/login`">登录</nuxt-link>
        <nuxt-link :class="{'active': !IsLoginActive}" :to="`/signup`">免费注册</nuxt-link>
    </div>
    <h1>登录和免费注册页面</h1>
    <div class="main-form">
        <nuxt />
    </div>
  </div>
</template>
<script >
export default {
  components: {},
  data(){
    return {
      page: '',
      IsLoginActive: true
    }
  },
  mounted() {
    document.querySelector('body')?.classList.add('login_body')
    this.IsLoginActive = this.$router.currentRoute.name =='login'? true: false

  },
  beforeDestroy() {
    document.querySelector('body')?.classList.remove("login_body")

  }

}
</script>
<style lang="scss" scoped>
@import "~/static/styles/style-login.css";
@import "~/static/styles/snow.css";
.err_msg {
    color: red;
    margin: -20px 0 5px;
}
</style>