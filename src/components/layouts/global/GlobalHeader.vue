<template>
  <a-layout>
    <a-layout-header style="background: #fff; padding: 0">
      <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
      />
      <slot></slot>
    </a-layout-header>
  </a-layout>
</template>
<script>
export default {
  name: 'GlobalHeader',
  data() {
    return {
      collapsed: false,
    };
  }
};
</script>
<style scoped>
.trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

.trigger:hover {
  color: #1890ff;
}

.logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>
