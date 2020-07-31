<template>
  <div id="app">
    <Header :title="title" />
    <!-- 路由匹配到的组件将渲染在这里 -->
    <div class="router-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from "@/components/header/Header";
export default {
  name: "App",
  data: function () {
    return {
      title: "My kitchen :)",
    };
  },
  components: {
    Header,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.router-container {
  flex: 1;
}
</style>
