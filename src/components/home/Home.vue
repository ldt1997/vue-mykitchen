<template>
  <div class="container">
    <el-button>默认按钮</el-button>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: {
    title: String,
  },
};
</script>

<style scoped>
.header {
  text-align: center;
}
</style>
