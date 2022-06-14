<template>
  <div>
    <Tutorial />
    <div v-for="item of categoryFilter" :key="item.title"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {mapActions, mapState} from 'vuex'
export default Vue.extend({
  name: 'IndexPage',
  computed: {
    ...mapState(['categories']),
    categoryFilter() {
      return this.categories.filter(i => i.title !== '默认分类')
    },
  },
  mounted() {
    this.getCategories()
  },
  methods: {
    ...mapActions([
      'getCategories'
    ])
  },
})
</script>
