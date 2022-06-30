<template>
    <div class="form-w3-agile">
    <h2 class="sub-agileits-w3layouts">登录</h2>
            <input type="text" v-model="user.username" name="name" placeholder="手机号" required="">
            <input type="password" v-model="user.password" name="password" placeholder="密码" required="">
            <div class="err_msg" v-if="login_fail">账号或密码错误，请重新登录。</div>
            <a href="#" class="forgot-w3layouts">忘记密码?</a>
        <div class="submit-w3l">
            <input type="submit" @click="login" value="登 录">
        </div>
        <p class="p-bottom-w3ls"><a href="signup">免费注册</a>如果您还没有账号？</p>
    </div>
</template>
<script >
export default({
    name: 'LoginPage',
    layout: 'passport',
    data() {
        return {
            user:{},
            login_fail: false
        }
    },
    methods: {
        async login() {
            if (!this.user.username || !this.user.password) return
            var result = await this.$store.dispatch('user/login', {username: this.user.username, password: this.user.password})
            result = result.data
            if (result.success == true) {
                this.$cookies.set('token', result.token)
                this.$cookies.set('user', result.user)
                this.$router.replace('/')
            } else if (result.success == false){
                this.login_fail = true
            }
             
        }
    }
})
</script>