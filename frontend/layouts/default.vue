<template>
  <div>
    <header-nav></header-nav>
    <nuxt />
    <right-side></right-side>
  </div>
</template>
<script lang="ts">
import HeaderNav from '../components/widgets/HeaderNav.vue'
import RightSide from '../components/widgets/RightSide.vue'
export default {
  components: {
    HeaderNav,
    RightSide
  }
}
</script>