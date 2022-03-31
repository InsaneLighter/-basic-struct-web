<template>
  <div class="footer">
    <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=42070302000092">鄂公网安备 42070302000092号</a>
    &nbsp;
    <a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank">鄂ICP备2022003078号-1</a>
  </div>
</template>

<script>
export default {
  name: "GlobalFooter"
}
</script>

<style lang="less" scoped>
.footer {
  background: none repeat scroll 0 0 white;
  border-top: 1px solid #e7eaec;
  overflow: hidden;
  padding: 8px 6px 0 6px;
  height: 33px;
  font-size: 0.7rem !important;
  letter-spacing: 0.8px;
  font-family: Arial, sans-serif !important;
  position: fixed;
  bottom: 0;
  z-index: 99;
  width: 100%;
  text-align: center;

  a {
    color: #bfb8b8;
  }
}
</style>
