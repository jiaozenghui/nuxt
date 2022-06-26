<template>
    <p class="footer">
        <a>Jzh个人博客</a> <a>京ICP备2021014900号-1</a>
    </p>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: 'FooterContainer'
})
</script>
<style lang="scss" scoped>
    .footer {
        width: 100%;
        color: #a5a4a4;
        text-align: center;
        padding: 20px 0;
        clear: both;
        text-shadow: #fff 1px 0 2px, #fff 0 1px 2px, #fff -1px 0 2px, #fff 0 -1px 2px;
    }
</style>