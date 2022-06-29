<template>
  <div>
    <header-nav></header-nav>
    <div class="content">
      <left-side></left-side>
      <nuxt />
    </div>
    <footer-container></footer-container>
  </div>
</template>
<script lang="ts">
import HeaderNav from '../components/widgets/HeaderNav.vue'
import RightSide from '../components/widgets/RightSide.vue'
import LeftSide from '../components/widgets/LeftSide.vue'
import FooterContainer from '../components/widgets/FooterContainer.vue'
export default {
  components: {
    HeaderNav,
    RightSide,
    LeftSide,
    FooterContainer
  }
}
</script>
