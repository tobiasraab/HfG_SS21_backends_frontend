<template>
  <div class="layout-template">
    <navigationBar class="nav-bar" />
    <Nuxt class="layoutNuxt p-8" />
  </div>
</template>

<script>
import navigationBar from '../components/navigationBar.vue'

export default {
  components: {
    navigationBar
  }
}
</script>
<style scoped>
@import "./../assets/fonts/fontRoman.css";

body {
  font-family: "silkaregular", sans-serif;
  color: #080808;
}
.layoutNuxt {
  min-height: calc(100vh - 28px - 48px);
  z-index: 1;
}
.nav-bar {
  position: sticky;
  z-index: 2;
}
</style>
