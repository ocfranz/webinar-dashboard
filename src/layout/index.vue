<template>
  <div id="app">
    <div class="container">
      <DashboardSidebar />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import DashboardSidebar from "./Sidebar.vue";
export default {
  name: "AppLayout",
  components: { DashboardSidebar }
};
</script>

<style lang="scss">
body,
html {
  height: 100%;
  padding: 0;
  margin: 0;
  width: 100%;
}
* {
  box-sizing: border-box;
}
#app {
  width: 100%;
  height: 100%;
  background: linear-gradient(-105deg, #dc07d0, #0db7f4);
  .container {
    width: 100%;
    height: 100%;
    display: flex;
  }
}
</style>
