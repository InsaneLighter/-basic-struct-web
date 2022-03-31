<template>
  <div>
    <h1>Layout</h1>
    <router-view/>
    <global-footer></global-footer>
  </div>
</template>

<script>
import GlobalFooter from './global/GlobalFooter'
export default {
  name: "Layout",
  components: {
    GlobalFooter
  }
}
</script>

<style scoped>

</style>
