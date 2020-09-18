<template>
  <nav class="sidebar">
    <div class="sidebar-container">
      <div class="sidebar-heading">
        <Brand />
      </div>
      <div class="sidebar-items">
        <div class="sidebar-direct-links">
          <router-link to="/">
            <NavItem :iconName="'videoIcon'" />
          </router-link>
          <router-link to="/q&a">
            <NavItem />
          </router-link>
          <router-link to="/stats">
            <NavItem :iconName="'chart'" />
          </router-link>
          <router-link to="/calendar">
            <NavItem :iconName="'calendar'" />
          </router-link>
          <router-link to="/files">
            <NavItem :iconName="'file'" />
          </router-link>
        </div>
        <div class="sidebar-user-links">
          <NavItem :iconName="'mail'" />
          <NavItem :iconName="'user'" />
          <NavItem :iconName="'layout'" />
          <Avatar :username="'Jhon Doe'" />
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import Brand from "../components/UiBrand.vue";
import Avatar from "../components/UiAvatar.vue";
import NavItem from "../components/UiNavItem.vue";
export default {
  components: { Brand, Avatar, NavItem }
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
    height: 100%;
  }
  .sidebar-items {
    height: calc(100% - 50px);
  }
  .sidebar-direct-links {
    height: 50%;
  }
  .sidebar-user-links {
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 0px 0px 20px 0px;
    .avatar-wrapper {
      margin-top: 10px;
    }
  }
}
</style>