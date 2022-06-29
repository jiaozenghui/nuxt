<template>
    <div class="form-w3-agile">
        <h2 class="sub-agileits-w3layouts">免费注册</h2>
        <input type="text" name="name" v-model="user.username" placeholder="用户名" required="">
        <input type="password" name="password" v-model="user.password"  placeholder="密码" required="">
        <input type="password" name="Password-sure" v-model="user.password_sure" placeholder="确认密码" required="">
        <div class="err_msg" v-if="signup_fail">{{err_msg}}</div>
        <div class="submit-w3l">
            <input type="submit" @click="signup" :disabled="user.password!=user.password_sure"  value="免费注册">
        </div>

    </div>
</template>
<script  >
import { mapState } from 'vuex';
export default {
    layout: 'passport',
    data() {
        return {
            user: {},
            signup_fail: false,
            err_msg: ''
        }
    },
    methods: {
        async signup() {
            if (!this.user.username || !this.user.password) return
            var result = await this.$store.dispatch('signup', {username: this.user.username, password: this.user.password})
            if (result.success == true) {
                this.$router.replace('/login')
            } else if (result.success == false && result.code == 409){
                this.signup_fail = true
                this.err_msg = '账号户已存在'
            } else {
                this.signup_fail = true
                this.err_msg = '注册失败'
            }
        }
    }
}
</script>
