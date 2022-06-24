<template>
<form name="formsearch" class="search_container" action="search.html" method="get">
    <input required
    id="filter"
    title="filter"
    name="filter"
    class="form-control verify-input search_input"
    type="text"
    />
    <span class="iconfont icon-sousuo search_icon"></span>
</form>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: 'SearchInput',
})
</script>
<style lang="scss" scoped>
.search_container {
    position: relative;
    .search_icon {
        position: absolute;
        top: 5px;
        right: 5px;
    }
}
</style>