<template>
  <nav class="sidebar">
    <div class="sidebar-container">
      <div class="sidebar-heading">
        <Brand />
      </div>
      <div class="sidebar-items">
        <div class="sidebar-user-link">
          <Avatar :username="'ocfranz'" />
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import Brand from "../components/UiBrand.vue";
import Avatar from "../components/UiAvatar.vue";
export default {
  components: { Brand, Avatar }
};
</script>
<style lang="scss" scoped>
.sidebar {
  width: 70px;
  height: 100%;
  background-color: #202225;
  color: #ffffff;
  .sidebar-container {
    padding: 0px 15px;
    text-align: center;
  }
}
</style>