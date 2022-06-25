<template>
  <div>
    <div v-for="item of categoryFilter" :key="item._id">
      <span>{{item.title}}</span>
      <p>{{item.abstract}}</p>
    </div>
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
      return this.categories
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
