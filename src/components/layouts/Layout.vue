<template>
  <a-layout id="layout">
    <global-side-menu></global-side-menu>
    <global-header>
      <a-layout-content
          :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '800px' }"
      >
        <router-view/>
      </a-layout-content>
    </global-header>
    <global-footer></global-footer>
  </a-layout>
</template>

<script>
import GlobalFooter from './global/GlobalFooter'
import GlobalHeader from './global/GlobalHeader'
import GlobalSideMenu from './global/GlobalSideMenu'
export default {
  name: "Layout",
  components: {
    GlobalFooter,
    GlobalHeader,
    GlobalSideMenu
  }
}
</script>

<style scoped>
#layout{
  height: 100%;
}
</style>
