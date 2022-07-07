<template>
  <div>
    <div v-for="item of articleList" :key="item._id">
      <span>{{item.title}}</span>
      <p>{{item.abstract}}</p>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data(){
    return {
      articleList: []
    }
  },
  async asyncData({$axios, route, error}) {
    const { page = 1, category = '', keywords = '' } = route.query;
    const res = await $axios.get('articles', {pageIndex:page});
    if (res.success) {
      return {
        articleList: res.result
      }
    }
   error({statusCode:400, message: '查询数据失败！'})
  }
}
</script>
