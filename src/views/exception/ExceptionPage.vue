<template>
  <div class="exception">
    <a-result :status="type" :subTitle="config[type].desc" :title="type">
      <template v-slot:extra>
        <a-button type="primary" @click="handleToHome">返回仪表盘</a-button>
      </template>
    </a-result>
  </div>
</template>

<script>
import types from './type'

export default {
  name: 'Exception',
  props: {
    type: {
      type: String,
      default: '404'
    }
  },
  data() {
    return {
      config: types
    }
  },
  methods: {
    handleToHome() {
      this.$router.push({ path: '/' })
    }
  }
}
</script>
