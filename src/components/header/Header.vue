<template>
  <div class="header">
    <h4>
      <router-link to="/">{{ title }}</router-link>
    </h4>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    title: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  text-align: center;
}
</style>
